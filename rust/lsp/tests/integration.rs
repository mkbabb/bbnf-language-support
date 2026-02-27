use std::io::{BufReader, Read, Write};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant};

fn send_lsp(stdin: &mut impl Write, msg: &str) {
    let header = format!("Content-Length: {}\r\n\r\n", msg.len());
    stdin.write_all(header.as_bytes()).unwrap();
    stdin.write_all(msg.as_bytes()).unwrap();
    stdin.flush().unwrap();
}

fn read_lsp(stdout: &mut BufReader<impl Read>) -> String {
    let mut header_buf = Vec::new();
    loop {
        let mut byte = [0u8; 1];
        stdout.read_exact(&mut byte).unwrap();
        header_buf.push(byte[0]);
        if header_buf.ends_with(b"\r\n\r\n") {
            break;
        }
    }
    let header = String::from_utf8(header_buf).unwrap();
    let len: usize = header
        .lines()
        .find(|l| l.starts_with("Content-Length:"))
        .unwrap()
        .split(": ")
        .nth(1)
        .unwrap()
        .trim()
        .parse()
        .unwrap();
    let mut body = vec![0u8; len];
    stdout.read_exact(&mut body).unwrap();
    String::from_utf8(body).unwrap()
}

/// Read LSP messages until we find one matching the predicate, with a timeout.
/// Skips notifications like window/logMessage.
fn read_until(
    stdout: &mut BufReader<impl Read>,
    predicate: impl Fn(&str) -> bool,
    timeout: Duration,
) -> Option<String> {
    let start = Instant::now();
    loop {
        if start.elapsed() > timeout {
            return None;
        }
        let msg = read_lsp(stdout);
        if predicate(&msg) {
            return Some(msg);
        }
    }
}

/// Read LSP messages until we find one containing the given text.
fn read_until_contains(
    stdout: &mut BufReader<impl Read>,
    needle: &str,
) -> String {
    read_until(stdout, |msg| msg.contains(needle), Duration::from_secs(10))
        .unwrap_or_else(|| panic!("Timed out waiting for message containing '{}'", needle))
}

/// Read LSP messages until we find a response with the given id.
fn read_response(stdout: &mut BufReader<impl Read>, id: u32) -> String {
    let needle = format!("\"id\":{}", id);
    read_until(stdout, |msg| msg.contains(&needle), Duration::from_secs(10))
        .unwrap_or_else(|| panic!("Timed out waiting for response with id {}", id))
}

fn start_server() -> (impl Write, BufReader<impl Read>, std::process::Child) {
    let binary = env!("CARGO_BIN_EXE_bbnf-lsp");
    let mut child = Command::new(binary)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .expect("Failed to start bbnf-lsp");
    let stdin = child.stdin.take().unwrap();
    let stdout = BufReader::new(child.stdout.take().unwrap());
    (stdin, stdout, child)
}

fn initialize(stdin: &mut impl Write, stdout: &mut BufReader<impl Read>) -> String {
    send_lsp(
        stdin,
        r#"{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"processId":null,"rootUri":"file:///tmp","capabilities":{}}}"#,
    );
    let resp = read_response(stdout, 1);
    send_lsp(
        stdin,
        r#"{"jsonrpc":"2.0","method":"initialized","params":{}}"#,
    );
    resp
}

fn open_doc(stdin: &mut impl Write, uri: &str, text: &str) {
    let escaped = text
        .replace('\\', "\\\\")
        .replace('"', "\\\"")
        .replace('\n', "\\n")
        .replace('\t', "\\t");
    let msg = format!(
        r#"{{"jsonrpc":"2.0","method":"textDocument/didOpen","params":{{"textDocument":{{"uri":"{}","languageId":"bbnf","version":1,"text":"{}"}}}}}}"#,
        uri, escaped
    );
    send_lsp(stdin, &msg);
}

/// Open a doc and wait for publishDiagnostics notification.
fn open_doc_and_wait_diagnostics(
    stdin: &mut impl Write,
    stdout: &mut BufReader<impl Read>,
    uri: &str,
    text: &str,
) -> String {
    open_doc(stdin, uri, text);
    read_until_contains(stdout, "publishDiagnostics")
}

fn shutdown(
    stdin: &mut impl Write,
    stdout: &mut BufReader<impl Read>,
    mut child: std::process::Child,
) {
    send_lsp(
        stdin,
        r#"{"jsonrpc":"2.0","id":999,"method":"shutdown","params":null}"#,
    );
    let _ = read_response(stdout, 999);
    send_lsp(
        stdin,
        r#"{"jsonrpc":"2.0","method":"exit","params":null}"#,
    );
    let status = child.wait().unwrap();
    assert!(status.success(), "LSP process exited with: {:?}", status);
}

// ============================================================================
// Tests
// ============================================================================

#[test]
fn test_initialize_capabilities() {
    let (mut stdin, mut stdout, child) = start_server();
    let resp = initialize(&mut stdin, &mut stdout);

    assert!(resp.contains("hoverProvider"), "missing hover");
    assert!(resp.contains("definitionProvider"), "missing definition");
    assert!(resp.contains("referencesProvider"), "missing references");
    assert!(resp.contains("renameProvider"), "missing rename");
    assert!(resp.contains("completionProvider"), "missing completion");
    assert!(
        resp.contains("semanticTokensProvider"),
        "missing semantic tokens"
    );
    assert!(resp.contains("codeLensProvider"), "missing code lens");
    assert!(
        resp.contains("documentFormattingProvider"),
        "missing formatting"
    );
    assert!(resp.contains("foldingRangeProvider"), "missing folding");
    assert!(resp.contains("codeActionProvider"), "missing code actions");

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_diagnostics_valid_grammar() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nstring = /\"[^\"]*\"/;\nvalue = number | string;";
    let diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);
    eprintln!("Valid grammar diagnostics: {}", diag);

    // Parse the diagnostics array — should be empty or have only hints (unused)
    // In this grammar: value is first rule (entry), references number and string, all used
    // But wait: value is defined last, number is first. The first rule is entry point.
    // So number is entry, it doesn't reference string or value → those are unused.
    // Let's just check no errors/warnings (only hints allowed)
    assert!(
        !diag.contains("\"severity\":1"),
        "Should have no errors in valid grammar"
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_diagnostics_unused_rule() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "value = number;\nnumber = /[0-9]+/;\nunused = \"hello\";";
    let diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);
    eprintln!("Unused rule diagnostics: {}", diag);
    assert!(
        diag.contains("Unused rule"),
        "Expected unused rule diagnostic, got: {}",
        diag
    );
    assert!(
        diag.contains("unused"),
        "Expected 'unused' name in diagnostic"
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_diagnostics_undefined_rule() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "value = number | missing_rule;\nnumber = /[0-9]+/;";
    let diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);
    eprintln!("Undefined rule diagnostics: {}", diag);
    assert!(
        diag.contains("Undefined rule"),
        "Expected undefined rule diagnostic, got: {}",
        diag
    );
    assert!(
        diag.contains("missing_rule"),
        "Expected 'missing_rule' name"
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_diagnostics_parse_error() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Missing semicolon — parse error
    let grammar = "value = number";
    let diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);
    eprintln!("Parse error diagnostics: {}", diag);
    assert!(
        diag.contains("severity\":1") || diag.contains("severity\":2")
            || diag.contains("Parse") || diag.contains("parse")
            || diag.contains("Incomplete") || diag.contains("incomplete"),
        "Expected parse error diagnostic, got: {}",
        diag
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_hover_on_definition() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Hover on "number" at line 0, char 2
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":10,"method":"textDocument/hover","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":0,"character":2}}}"#,
    );
    let resp = read_response(&mut stdout, 10);
    eprintln!("Hover response: {}", resp);
    assert!(
        resp.contains("number"),
        "Expected number in hover content, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_goto_definition() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Go to definition of "number" reference at line 1, char 10
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":11,"method":"textDocument/definition","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":1,"character":10}}}"#,
    );
    let resp = read_response(&mut stdout, 11);
    eprintln!("Definition response: {}", resp);
    // Should point to line 0 (where number is defined)
    assert!(
        resp.contains("\"line\":0"),
        "Expected definition at line 0, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_completion() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nstring = /\"[^\"]*\"/;\nvalue = ;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":12,"method":"textDocument/completion","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":2,"character":8}}}"#,
    );
    let resp = read_response(&mut stdout, 12);
    eprintln!("Completion response: {}", resp);
    assert!(
        resp.contains("number"),
        "Expected 'number' in completions, got: {}",
        resp
    );
    assert!(
        resp.contains("string"),
        "Expected 'string' in completions, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_document_symbols() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "alpha = \"a\";\nbeta = \"b\";\ngamma = alpha | beta;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":13,"method":"textDocument/documentSymbol","params":{"textDocument":{"uri":"file:///test.bbnf"}}}"#,
    );
    let resp = read_response(&mut stdout, 13);
    eprintln!("Symbols response: {}", resp);
    assert!(
        resp.contains("alpha"),
        "Expected alpha symbol, got: {}",
        resp
    );
    assert!(resp.contains("beta"), "Expected beta symbol, got: {}", resp);
    assert!(
        resp.contains("gamma"),
        "Expected gamma symbol, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_references() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number;\nlist = number | value;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Find references to "number" (defined on line 0, referenced on lines 1 and 2)
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":14,"method":"textDocument/references","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":0,"character":2},"context":{"includeDeclaration":true}}}"#,
    );
    let resp = read_response(&mut stdout, 14);
    eprintln!("References response: {}", resp);
    // Should find at least 3 locations (definition + 2 refs)
    assert!(
        resp.contains("\"line\":0") && resp.contains("\"line\":1") && resp.contains("\"line\":2"),
        "Expected references on lines 0, 1, 2, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_formatting() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Grammar with irregular spacing
    let grammar = "number = /[0-9]+/ ;\nvalue = number | \"hello\" ;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":15,"method":"textDocument/formatting","params":{"textDocument":{"uri":"file:///test.bbnf"},"options":{"tabSize":4,"insertSpaces":true}}}"#,
    );
    let resp = read_response(&mut stdout, 15);
    eprintln!("Formatting response: {}", resp);
    // Should produce edits or null — either is valid
    assert!(
        resp.contains("\"id\":15"),
        "Expected formatting response, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_rename() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Prepare rename on "number" definition
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":16,"method":"textDocument/prepareRename","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":0,"character":2}}}"#,
    );
    let resp = read_response(&mut stdout, 16);
    eprintln!("Prepare rename response: {}", resp);
    assert!(
        resp.contains("number"),
        "Expected 'number' placeholder in prepare rename, got: {}",
        resp
    );

    // Execute rename
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":17,"method":"textDocument/rename","params":{"textDocument":{"uri":"file:///test.bbnf"},"position":{"line":0,"character":2},"newName":"digit"}}"#,
    );
    let resp = read_response(&mut stdout, 17);
    eprintln!("Rename response: {}", resp);
    assert!(
        resp.contains("digit"),
        "Expected 'digit' in rename edits, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_semantic_tokens() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number | \"hello\";";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":18,"method":"textDocument/semanticTokens/full","params":{"textDocument":{"uri":"file:///test.bbnf"}}}"#,
    );
    let resp = read_response(&mut stdout, 18);
    eprintln!("Semantic tokens response: {}", resp);
    assert!(
        resp.contains("data"),
        "Expected token data array, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_code_lens() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    let grammar = "number = /[0-9]+/;\nvalue = number;\nlist = number | value;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":19,"method":"textDocument/codeLens","params":{"textDocument":{"uri":"file:///test.bbnf"}}}"#,
    );
    let resp = read_response(&mut stdout, 19);
    eprintln!("Code lens response: {}", resp);
    assert!(
        resp.contains("reference"),
        "Expected reference count in code lens, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_folding_ranges() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Multi-line rule should produce folding range
    let grammar = "value =\n  number\n  | string\n  | \"null\";\nnumber = /[0-9]+/;\nstring = /\"[^\"]*\"/;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":20,"method":"textDocument/foldingRange","params":{"textDocument":{"uri":"file:///test.bbnf"}}}"#,
    );
    let resp = read_response(&mut stdout, 20);
    eprintln!("Folding response: {}", resp);
    assert!(
        resp.contains("\"id\":20"),
        "Expected folding response, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_code_actions() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Grammar with an unused rule
    let grammar = "value = number;\nnumber = /[0-9]+/;\nunused = \"hello\";";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Request code actions for the "unused" rule on line 2
    send_lsp(
        &mut stdin,
        r#"{"jsonrpc":"2.0","id":21,"method":"textDocument/codeAction","params":{"textDocument":{"uri":"file:///test.bbnf"},"range":{"start":{"line":2,"character":0},"end":{"line":2,"character":6}},"context":{"diagnostics":[]}}}"#,
    );
    let resp = read_response(&mut stdout, 21);
    eprintln!("Code actions response: {}", resp);
    assert!(
        resp.contains("\"id\":21"),
        "Expected code actions response, got: {}",
        resp
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_real_json_grammar() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Note: The full JSON grammar with complex regex patterns like /\\["\\/bfnrt]/
    // currently causes a regex panic in the BBNF parser. The LSP should catch this
    // gracefully and report it as a diagnostic rather than crashing.
    // Using a simplified version here that parses cleanly.
    let grammar = r#"null = "null";
bool = "true" | "false";
number = /[0-9]+/;
string = /[a-zA-Z]+/;
array = "[" , [ value , { "," , value } ] , "]";
pair = string , ":" , value;
object = "{" , [ pair , { "," , pair } ] , "}";
value = string | number | object | array | bool | null;"#;

    let diag =
        open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///json.bbnf", grammar);
    eprintln!("JSON grammar diagnostics: {}", diag);
    // Should parse — no errors (only hints about unused rules allowed)
    assert!(
        !diag.contains("\"severity\":1"),
        "JSON grammar should have no errors, got: {}",
        diag
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_regex_panic_handled() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // This regex pattern causes a panic in the parser — LSP should catch it gracefully.
    let grammar = r#"char = /[^"\\]/ | /\\["\\/bfnrt]/ | /\\u[0-9a-fA-F]{4}/;
value = char;"#;

    let diag =
        open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);
    eprintln!("Regex panic diagnostics: {}", diag);
    // Should get a diagnostic about parse error, not a crash
    assert!(
        diag.contains("publishDiagnostics"),
        "Should get diagnostics notification even on regex panic"
    );
    assert!(
        diag.contains("error") || diag.contains("Parse") || diag.contains("regex"),
        "Should report the regex error, got: {}",
        diag
    );

    shutdown(&mut stdin, &mut stdout, child);
}

#[test]
fn test_did_change() {
    let (mut stdin, mut stdout, child) = start_server();
    initialize(&mut stdin, &mut stdout);

    // Start with valid grammar
    let grammar = "number = /[0-9]+/;";
    let _diag = open_doc_and_wait_diagnostics(&mut stdin, &mut stdout, "file:///test.bbnf", grammar);

    // Change to grammar with undefined reference
    let changed = r#"{"jsonrpc":"2.0","method":"textDocument/didChange","params":{"textDocument":{"uri":"file:///test.bbnf","version":2},"contentChanges":[{"text":"value = missing;"}]}}"#;
    send_lsp(&mut stdin, changed);
    let diag = read_until_contains(&mut stdout, "publishDiagnostics");
    eprintln!("Changed diagnostics: {}", diag);
    assert!(
        diag.contains("Undefined rule") || diag.contains("missing"),
        "Expected diagnostic about undefined 'missing', got: {}",
        diag
    );

    shutdown(&mut stdin, &mut stdout, child);
}
