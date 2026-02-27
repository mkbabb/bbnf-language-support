use std::collections::{HashMap, HashSet};

use bbnf::grammar::{BBNFGrammar, Expression, Token};
use bbnf::analysis::{tarjan_scc, compute_first_sets, CharSet};
use bbnf::generate::{calculate_ast_deps, get_nonterminal_name};

/// Extract the inner value from a TokenExpression (single expression).
fn get_inner_expression<'a, T>(tok: &'a Token<'a, T>) -> &'a T {
    &tok.value
}

use crate::analysis::LineIndex;

use tower_lsp_server::ls_types::*;

/// Information about a single production rule.
#[derive(Debug, Clone)]
pub struct RuleInfo {
    /// The rule name (LHS nonterminal).
    pub name: String,
    /// Byte offset range of the LHS name.
    pub name_span: (usize, usize),
    /// Byte offset range of the entire rule (LHS = RHS ;).
    pub full_span: (usize, usize),
    /// Pretty-printed RHS for hover display.
    pub rhs_text: String,
    /// All nonterminal references in the RHS.
    pub references: Vec<ReferenceInfo>,
}

/// A reference to a nonterminal in the RHS of a rule.
#[derive(Debug, Clone)]
pub struct ReferenceInfo {
    /// The referenced nonterminal name.
    pub name: String,
    /// Byte offset range of this reference.
    pub span: (usize, usize),
}

/// Semantic token data for a single token.
#[derive(Debug, Clone)]
pub struct SemanticTokenInfo {
    pub span: (usize, usize),
    pub token_type: u32,
}

/// Owned representation of an import directive.
#[derive(Debug, Clone)]
pub struct ImportInfo {
    /// The path string from the import.
    pub path: String,
    /// Byte offset range of the entire import directive.
    pub span: (usize, usize),
    /// If `Some`, selective import; if `None`, glob import.
    pub items: Option<Vec<String>>,
}

/// Pre-analyzed document state — all data is owned (no lifetimes).
#[derive(Debug, Clone)]
pub struct DocumentInfo {
    pub rules: Vec<RuleInfo>,
    pub diagnostics: Vec<Diagnostic>,
    /// name → index into `rules`
    pub rule_index: HashMap<String, usize>,
    /// Semantic tokens in document order.
    pub semantic_tokens: Vec<SemanticTokenInfo>,
    /// FIRST set labels per rule name (formatted for display).
    pub first_set_labels: HashMap<String, String>,
    /// Rules that can derive the empty string.
    pub nullable_rules: HashSet<String>,
    /// Import directives parsed from the document.
    pub imports: Vec<ImportInfo>,
}

/// Stored per-document: raw text + analyzed info + precomputed line index.
pub struct DocumentState {
    pub text: String,
    pub info: DocumentInfo,
    /// Precomputed line-start offsets for O(log n) position conversion.
    pub line_index: LineIndex,
}

impl DocumentState {
    pub fn new(text: String) -> Self {
        let line_index = LineIndex::new(&text);
        let info = analyze(&text, &line_index);
        Self { text, info, line_index }
    }

    pub fn update(&mut self, text: String) {
        let line_index = LineIndex::new(&text);
        self.info = analyze(&text, &line_index);
        self.line_index = line_index;
        self.text = text;
    }
}

/// Semantic token type indices matching our legend.
#[allow(dead_code)]
pub mod token_types {
    pub const RULE_DEFINITION: u32 = 0;
    pub const RULE_REFERENCE: u32 = 1;
    pub const STRING: u32 = 2;
    pub const REGEXP: u32 = 3;
    pub const OPERATOR: u32 = 4;
    pub const KEYWORD: u32 = 5;
    pub const COMMENT: u32 = 6;
}

/// Analyze a BBNF document. Parses the text, extracts all rule data, diagnostics,
/// and semantic tokens into owned types. The borrowed AST is dropped before return.
pub fn analyze(text: &str, line_index: &LineIndex) -> DocumentInfo {
    // Wrap parsing in catch_unwind to handle regex panics in grammar.rs
    let parse_result = std::panic::catch_unwind(std::panic::AssertUnwindSafe(|| {
        let parser = BBNFGrammar::grammar_with_imports();
        parser.parse_return_state(text)
    }));

    let mut rules = Vec::new();
    let mut diagnostics = Vec::new();
    let mut rule_index = HashMap::new();
    let mut semantic_tokens = Vec::new();

    let (result, parser_state) = match parse_result {
        Ok(r) => r,
        Err(panic_info) => {
            // Parser panicked (likely invalid regex).
            let msg = if let Some(s) = panic_info.downcast_ref::<String>() {
                s.clone()
            } else if let Some(s) = panic_info.downcast_ref::<&str>() {
                s.to_string()
            } else {
                "Internal parser error".to_string()
            };
            let pos = Position::new(0, 0);
            diagnostics.push(Diagnostic {
                range: Range::new(pos, pos),
                severity: Some(DiagnosticSeverity::ERROR),
                source: Some("bbnf".into()),
                message: format!("Parse error: {}", msg),
                ..Default::default()
            });
            return DocumentInfo {
                rules,
                diagnostics,
                rule_index,
                semantic_tokens,
                first_set_labels: HashMap::new(),
                nullable_rules: HashSet::new(),
                imports: Vec::new(),
            };
        }
    };

    let Some(parsed_grammar) = result else {
        // Parse failure — report error at furthest offset.
        let offset = parser_state.furthest_offset.max(parser_state.offset);
        let pos = line_index.offset_to_position(offset);
        diagnostics.push(Diagnostic {
            range: Range::new(pos, pos),
            severity: Some(DiagnosticSeverity::ERROR),
            source: Some("bbnf".into()),
            message: format!(
                "Parse error at offset {} (line {}, col {})",
                offset,
                pos.line + 1,
                pos.character + 1
            ),
            ..Default::default()
        });
        return DocumentInfo {
            rules,
            diagnostics,
            rule_index,
            semantic_tokens,
            first_set_labels: HashMap::new(),
            nullable_rules: HashSet::new(),
            imports: Vec::new(),
        };
    };

    // Check for incomplete parse (didn't consume all input).
    if parser_state.offset < text.len() {
        let remaining = &text[parser_state.offset..];
        if !remaining.trim().is_empty() {
            let pos = line_index.offset_to_position(parser_state.offset);
            diagnostics.push(Diagnostic {
                range: Range::new(pos, pos),
                severity: Some(DiagnosticSeverity::ERROR),
                source: Some("bbnf".into()),
                message: "Unexpected input after last rule".into(),
                ..Default::default()
            });
        }
    }

    // Extract imports and rules from the parsed grammar.
    let import_infos: Vec<ImportInfo> = parsed_grammar
        .imports
        .iter()
        .map(|imp| ImportInfo {
            path: imp.path.to_string(),
            span: (imp.span.start, imp.span.end),
            items: imp.items.as_ref().map(|items| {
                items.iter().map(|i| i.to_string()).collect()
            }),
        })
        .collect();
    let ast = parsed_grammar.rules;

    // Check for empty AST on non-empty input — likely a parse failure not caught above.
    if ast.is_empty() && !text.trim().is_empty() && parsed_grammar.imports.is_empty() {
        let furthest = parser_state.furthest_offset.max(parser_state.offset);
        let pos = line_index.offset_to_position(furthest.min(text.len()));
        diagnostics.push(Diagnostic {
            range: Range::new(Position::new(0, 0), pos),
            severity: Some(DiagnosticSeverity::ERROR),
            source: Some("bbnf".into()),
            message: "Failed to parse any rules. Check syntax (each rule needs: name = expression ;)".into(),
            ..Default::default()
        });
        return DocumentInfo {
            rules,
            diagnostics,
            rule_index,
            semantic_tokens,
            first_set_labels: HashMap::new(),
            nullable_rules: HashSet::new(),
            imports: import_infos,
        };
    }

    // Extract rule info from AST.
    for (lhs, rhs) in ast.iter() {
        if let Expression::Nonterminal(Token { value: name, span: name_span, .. }) = lhs {
            let name_str = name.to_string();
            let name_byte_span = (name_span.start, name_span.end);

            // Compute full span (from LHS start to RHS end).
            let full_start = name_span.start;
            let full_end = compute_expression_end(rhs).unwrap_or(name_span.end);

            // Collect nonterminal references in RHS.
            let mut references = Vec::new();
            collect_references(rhs, &mut references);

            // Collect semantic tokens from RHS.
            collect_semantic_tokens(rhs, &mut semantic_tokens);

            // Semantic token for rule definition (LHS).
            semantic_tokens.push(SemanticTokenInfo {
                span: name_byte_span,
                token_type: token_types::RULE_DEFINITION,
            });

            // Pretty-print RHS for hover.
            let rhs_text = format_expression_short(rhs);

            // Check for duplicate rule.
            if let Some(&_existing_idx) = rule_index.get(&name_str) {
                diagnostics.push(Diagnostic {
                    range: line_index.span_to_range(name_byte_span.0, name_byte_span.1),
                    severity: Some(DiagnosticSeverity::ERROR),
                    source: Some("bbnf".into()),
                    message: format!("Duplicate rule: `{}`", name_str),
                    related_information: None, // TODO: populate with correct URI from caller
                    ..Default::default()
                });
            }

            let idx = rules.len();
            rule_index.insert(name_str.clone(), idx);

            rules.push(RuleInfo {
                name: name_str,
                name_span: name_byte_span,
                full_span: (full_start, full_end),
                rhs_text,
                references,
            });
        }
    }

    // Diagnostics: undefined nonterminals and unused rules.
    let defined: HashMap<&str, usize> = rules
        .iter()
        .enumerate()
        .map(|(i, r)| (r.name.as_str(), i))
        .collect();

    let mut referenced_names: std::collections::HashSet<&str> =
        std::collections::HashSet::new();

    for rule in &rules {
        for refinfo in &rule.references {
            referenced_names.insert(&refinfo.name);
            if !defined.contains_key(refinfo.name.as_str()) {
                diagnostics.push(Diagnostic {
                    range: line_index.span_to_range(refinfo.span.0, refinfo.span.1),
                    severity: Some(DiagnosticSeverity::WARNING),
                    source: Some("bbnf".into()),
                    message: format!("Undefined rule: `{}`", refinfo.name),
                    ..Default::default()
                });
            }
        }
    }

    for rule in &rules {
        if !referenced_names.contains(rule.name.as_str()) && rules.len() > 1 {
            // Don't flag the first rule — it's typically the entry point.
            if rule_index.get(rule.name.as_str()) != Some(&0) {
                diagnostics.push(Diagnostic {
                    range: line_index.span_to_range(rule.name_span.0, rule.name_span.1),
                    severity: Some(DiagnosticSeverity::HINT),
                    source: Some("bbnf".into()),
                    message: format!("Unused rule: `{}`", rule.name),
                    tags: Some(vec![DiagnosticTag::UNNECESSARY]),
                    ..Default::default()
                });
            }
        }
    }

    // Left recursion detection via dependency analysis.
    let deps = calculate_ast_deps(&ast);
    let scc = tarjan_scc(&deps);

    // Use SCC cyclic_rules directly — O(1) lookup instead of O(n*(V+E)) DFS.
    for rule_expr in &scc.cyclic_rules {
        if let Some(name) = get_nonterminal_name(rule_expr) {
            if let Some(&idx) = rule_index.get(name) {
                let rule = &rules[idx];
                diagnostics.push(Diagnostic {
                    range: line_index.span_to_range(rule.name_span.0, rule.name_span.1),
                    severity: Some(DiagnosticSeverity::INFORMATION),
                    source: Some("bbnf".into()),
                    message: format!("Rule `{}` participates in a cycle (left recursion)", name),
                    ..Default::default()
                });
            }
        }
    }

    // FIRST set computation for inlay hints (SCC-ordered, O(n+E)).
    let first_sets = compute_first_sets(&ast, &deps, &scc);

    let mut first_set_labels = HashMap::new();
    let mut nullable_rules = HashSet::new();

    for (lhs, rhs) in ast.iter() {
        if let Expression::Nonterminal(Token { value: name, .. }) = lhs {
            let name_str = name.to_string();

            if let Some(cs) = first_sets.first.get(lhs) {
                first_set_labels.insert(name_str.clone(), format_charset(cs));
            }

            if first_sets.nullable.contains(lhs) {
                nullable_rules.insert(name_str.clone());
            }

            // Enhanced diagnostic: empty rule body detection.
            if is_empty_rhs(rhs) {
                if let Some(&idx) = rule_index.get(name.as_ref()) {
                    let rule = &rules[idx];
                    diagnostics.push(Diagnostic {
                        range: line_index.span_to_range(rule.name_span.0, rule.name_span.1),
                        severity: Some(DiagnosticSeverity::WARNING),
                        source: Some("bbnf".into()),
                        message: format!("Rule `{}` has an empty body", name),
                        ..Default::default()
                    });
                }
            }
        }
    }

    // Sort semantic tokens by offset for encoding.
    semantic_tokens.sort_by_key(|t| t.span.0);

    DocumentInfo {
        rules,
        diagnostics,
        rule_index,
        semantic_tokens,
        first_set_labels,
        nullable_rules,
        imports: import_infos,
    }
}

/// Format a CharSet as a human-readable string for inlay hints.
fn format_charset(cs: &CharSet) -> String {
    if cs.is_empty() {
        return "{}".into();
    }

    let chars: Vec<u8> = cs.iter().collect();

    // Try to detect ranges.
    let mut parts: Vec<String> = Vec::new();
    let mut i = 0;
    while i < chars.len() {
        let start = chars[i];
        let mut end = start;
        while i + 1 < chars.len() && chars[i + 1] == end + 1 {
            end = chars[i + 1];
            i += 1;
        }
        if end - start >= 2 {
            parts.push(format!("'{}'..'{}'", start as char, end as char));
        } else if end > start {
            parts.push(format!("'{}'", start as char));
            parts.push(format!("'{}'", end as char));
        } else {
            parts.push(format!("'{}'", start as char));
        }
        i += 1;
    }

    // Truncate if too many parts.
    if parts.len() > 6 {
        let truncated: Vec<&str> = parts.iter().take(5).map(|s| s.as_str()).collect();
        format!("{{{}, ...}}", truncated.join(", "))
    } else {
        format!("{{{}}}", parts.join(", "))
    }
}

/// Check if a rule RHS is effectively empty (epsilon only).
fn is_empty_rhs(expr: &Expression<'_>) -> bool {
    match expr {
        Expression::Epsilon(_) => true,
        Expression::Rule(rhs, _) => is_empty_rhs(rhs),
        _ => false,
    }
}

/// Public wrapper for `compute_expression_end` (used by selection_range).
pub fn compute_expression_end_pub(expr: &Expression<'_>) -> Option<usize> {
    compute_expression_end(expr)
}

/// Recursively collect nonterminal references from an expression.
fn collect_references(expr: &Expression<'_>, refs: &mut Vec<ReferenceInfo>) {
    match expr {
        Expression::Nonterminal(tok) => {
            refs.push(ReferenceInfo {
                name: tok.value.to_string(),
                span: (tok.span.start, tok.span.end),
            });
        }
        Expression::Alternation(inner) | Expression::Concatenation(inner) => {
            for child in get_inner_expression(inner) {
                collect_references(child, refs);
            }
        }
        Expression::Skip(l, r) | Expression::Next(l, r) | Expression::Minus(l, r) => {
            collect_references(get_inner_expression(l), refs);
            collect_references(get_inner_expression(r), refs);
        }
        Expression::Group(inner)
        | Expression::Optional(inner)
        | Expression::Many(inner)
        | Expression::Many1(inner)
        | Expression::OptionalWhitespace(inner) => {
            collect_references(get_inner_expression(inner), refs);
        }
        Expression::Rule(rhs, _) => {
            collect_references(rhs, refs);
        }
        Expression::MappedExpression((expr_tok, _)) => {
            collect_references(get_inner_expression(expr_tok), refs);
        }
        Expression::DebugExpression((expr_tok, _)) => {
            collect_references(get_inner_expression(expr_tok), refs);
        }
        _ => {}
    }
}

/// Collect semantic tokens from an expression tree.
fn collect_semantic_tokens(expr: &Expression<'_>, tokens: &mut Vec<SemanticTokenInfo>) {
    match expr {
        Expression::Nonterminal(tok) => {
            tokens.push(SemanticTokenInfo {
                span: (tok.span.start, tok.span.end),
                token_type: token_types::RULE_REFERENCE,
            });
        }
        Expression::Literal(tok) => {
            tokens.push(SemanticTokenInfo {
                span: (tok.span.start, tok.span.end),
                token_type: token_types::STRING,
            });
        }
        Expression::Regex(tok) => {
            tokens.push(SemanticTokenInfo {
                span: (tok.span.start, tok.span.end),
                token_type: token_types::REGEXP,
            });
        }
        Expression::Epsilon(tok) => {
            tokens.push(SemanticTokenInfo {
                span: (tok.span.start, tok.span.end),
                token_type: token_types::KEYWORD,
            });
        }
        Expression::Alternation(inner) | Expression::Concatenation(inner) => {
            for child in get_inner_expression(inner) {
                collect_semantic_tokens(child, tokens);
            }
        }
        Expression::Skip(l, r) | Expression::Next(l, r) | Expression::Minus(l, r) => {
            collect_semantic_tokens(get_inner_expression(l), tokens);
            collect_semantic_tokens(get_inner_expression(r), tokens);
        }
        Expression::Group(inner)
        | Expression::Optional(inner)
        | Expression::Many(inner)
        | Expression::Many1(inner)
        | Expression::OptionalWhitespace(inner) => {
            collect_semantic_tokens(get_inner_expression(inner), tokens);
        }
        Expression::Rule(rhs, _) => {
            collect_semantic_tokens(rhs, tokens);
        }
        Expression::MappedExpression((expr_tok, _)) => {
            collect_semantic_tokens(get_inner_expression(expr_tok), tokens);
        }
        Expression::DebugExpression((expr_tok, _)) => {
            collect_semantic_tokens(get_inner_expression(expr_tok), tokens);
        }
        _ => {}
    }
}

/// Compute the end byte offset of an expression.
fn compute_expression_end(expr: &Expression<'_>) -> Option<usize> {
    match expr {
        Expression::Literal(tok)
        | Expression::Nonterminal(tok)
        | Expression::Regex(tok) => Some(tok.span.end),
        Expression::MappingFn(tok) => Some(tok.span.end),
        Expression::Epsilon(tok) => Some(tok.span.end),
        Expression::Alternation(inner) | Expression::Concatenation(inner) => {
            get_inner_expression(inner)
                .last()
                .and_then(|e| compute_expression_end(e))
                .or(Some(inner.span.end))
        }
        Expression::Skip(_, r) | Expression::Next(_, r) | Expression::Minus(_, r) => {
            compute_expression_end(get_inner_expression(r))
                .or(Some(r.span.end))
        }
        Expression::Group(inner)
        | Expression::Optional(inner)
        | Expression::Many(inner)
        | Expression::Many1(inner)
        | Expression::OptionalWhitespace(inner) => {
            Some(inner.span.end)
        }
        Expression::Rule(rhs, mapping) => {
            if let Some(m) = mapping {
                compute_expression_end(m)
            } else {
                compute_expression_end(rhs)
            }
        }
        Expression::ProductionRule(_, rhs) => compute_expression_end(rhs),
        Expression::MappedExpression((_, mapping_tok)) => {
            Some(mapping_tok.span.end)
        }
        Expression::DebugExpression((expr_tok, _)) => {
            compute_expression_end(get_inner_expression(expr_tok))
        }
    }
}

/// Quick one-line formatting of an expression for hover text.
fn format_expression_short(expr: &Expression<'_>) -> String {
    match expr {
        Expression::Literal(tok) => format!("\"{}\"", tok.value),
        Expression::Nonterminal(tok) => tok.value.to_string(),
        Expression::Regex(tok) => format!("/{}/", tok.value),
        Expression::Epsilon(_) => "ε".into(),
        Expression::Group(inner) => {
            format!("({})", format_expression_short(get_inner_expression(inner)))
        }
        Expression::Optional(inner) => {
            format!("[{}]", format_expression_short(get_inner_expression(inner)))
        }
        Expression::OptionalWhitespace(inner) => {
            format!("{}?w", format_expression_short(get_inner_expression(inner)))
        }
        Expression::Many(inner) => {
            format!("{{{}}}",  format_expression_short(get_inner_expression(inner)))
        }
        Expression::Many1(inner) => {
            format!("{}+", format_expression_short(get_inner_expression(inner)))
        }
        Expression::Skip(l, r) => {
            format!(
                "{} << {}",
                format_expression_short(get_inner_expression(l)),
                format_expression_short(get_inner_expression(r))
            )
        }
        Expression::Next(l, r) => {
            format!(
                "{} >> {}",
                format_expression_short(get_inner_expression(l)),
                format_expression_short(get_inner_expression(r))
            )
        }
        Expression::Minus(l, r) => {
            format!(
                "{} - {}",
                format_expression_short(get_inner_expression(l)),
                format_expression_short(get_inner_expression(r))
            )
        }
        Expression::Concatenation(inner) => get_inner_expression(inner)
            .iter()
            .map(|e| format_expression_short(e))
            .collect::<Vec<_>>()
            .join(", "),
        Expression::Alternation(inner) => get_inner_expression(inner)
            .iter()
            .map(|e| format_expression_short(e))
            .collect::<Vec<_>>()
            .join(" | "),
        Expression::Rule(rhs, _) => format_expression_short(rhs),
        Expression::ProductionRule(lhs, rhs) => {
            format!(
                "{} = {}",
                format_expression_short(lhs),
                format_expression_short(rhs)
            )
        }
        Expression::MappedExpression((expr_tok, _)) => {
            format_expression_short(get_inner_expression(expr_tok))
        }
        Expression::DebugExpression((expr_tok, _)) => {
            format_expression_short(get_inner_expression(expr_tok))
        }
        Expression::MappingFn(tok) => format!("=> {}", tok.value),
    }
}
