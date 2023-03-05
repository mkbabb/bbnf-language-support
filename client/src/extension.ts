import { Parser } from "@mkbabb/parse-that";
import { generateASTFromEBNF, generateParserFromEBNF } from "@mkbabb/parse-that/ebnf";

import * as vscode from "vscode";

import { formatEBNF } from ".";
import { findUndefinedNonterminals, findUnusedTerminals } from "./parser";
import { printExpressionToString } from "./printer";

type TestGrammarCache = {
    nonterminal: string;
    testString: string;
};

const reportParsingError = (
    parser: Parser<any>,
    document: vscode.TextDocument,
    diagnosticCollection: vscode.DiagnosticCollection
) => {
    const state = parser.state;

    const lineNumber = state.getLineNumber();
    const columnNumber = state.getColumnNumber();

    const diagnostic = new vscode.Diagnostic(
        new vscode.Range(lineNumber, columnNumber, lineNumber, columnNumber + 1),
        "Error parsing BBNF, last value was: " + printExpressionToString(state?.value),
        vscode.DiagnosticSeverity.Error
    );

    diagnosticCollection.set(document.uri, [
        ...(diagnosticCollection.get(document.uri) ?? []),
        diagnostic,
    ]);
};

const reportUndefinedNonterminals = (
    text: string,
    document: vscode.TextDocument,
    diagnosticCollection: vscode.DiagnosticCollection
) => {
    const [parser, ast] = generateASTFromEBNF(text);

    if (parser.state.isError) {
        reportParsingError(parser, document, diagnosticCollection);
        return;
    }

    const undefinedNonterminals = findUndefinedNonterminals(ast);

    for (const match of undefinedNonterminals) {
        const { value, offset } = match;

        const diagnostic = new vscode.Diagnostic(
            new vscode.Range(
                document.positionAt(offset - value.length - 1),
                document.positionAt(offset - 1)
            ),
            `Undefined variable: ${value}`,
            vscode.DiagnosticSeverity.Error
        );

        diagnosticCollection.set(document.uri, [
            ...(diagnosticCollection.get(document.uri) ?? []),
            diagnostic,
        ]);
    }
};

const reportUnusedTerminals = (
    text: string,
    document: vscode.TextDocument,
    diagnosticCollection: vscode.DiagnosticCollection
) => {
    const [parser, ast] = generateASTFromEBNF(text);

    if (parser.state.isError) {
        reportParsingError(parser, document, diagnosticCollection);
        return;
    }

    const unusedTerminals = findUnusedTerminals(ast);

    for (const [name, match] of unusedTerminals) {
        const { offset } = match;

        const diagnostic = new vscode.Diagnostic(
            new vscode.Range(
                document.positionAt(offset - name.length - 1),
                document.positionAt(offset - 1)
            ),
            `Unused variable: ${name}`,
            vscode.DiagnosticSeverity.Warning
        );

        diagnosticCollection.set(document.uri, [
            ...(diagnosticCollection.get(document.uri) ?? []),
            diagnostic,
        ]);
    }
};

export async function activate(context: vscode.ExtensionContext) {
    const diagnosticCollection = vscode.languages.createDiagnosticCollection("bbnf");
    diagnosticCollection.clear();

    const BBNFFileSelector = { language: "bbnf", scheme: "file" };

    const report = (document, text) => {
        diagnosticCollection.clear();

        if (document.languageId !== "bbnf") {
            return;
        }
        if (text.length === 0) {
            return;
        }
        reportUndefinedNonterminals(text, document, diagnosticCollection);
        reportUnusedTerminals(text, document, diagnosticCollection);
    };

    const documentChangeDisposable = vscode.workspace.onDidChangeTextDocument(
        (event) => {
            const document = event.document;
            const text = document.getText();
            report(document, text);
        }
    );
    context.subscriptions.push(documentChangeDisposable);

    const documentOpenDisposable = vscode.workspace.onDidOpenTextDocument(
        (document) => {
            const text = document.getText();
            report(document, text);
        }
    );
    context.subscriptions.push(documentOpenDisposable);

    const formatBBNF = vscode.languages.registerDocumentFormattingEditProvider(
        BBNFFileSelector,
        {
            provideDocumentFormattingEdits(
                document: vscode.TextDocument
            ): vscode.TextEdit[] {
                const text = document.getText();
                if (text.length === 0) {
                    return [];
                }

                const formatted = formatEBNF(text);
                if (!formatted) {
                    return [];
                }

                report(document, formatted);

                return [
                    vscode.TextEdit.replace(
                        new vscode.Range(
                            document.positionAt(0),
                            document.positionAt(document.getText().length)
                        ),
                        formatted
                    ),
                ];
            },
        }
    );
    context.subscriptions.push(formatBBNF);

    // create a cache for each document:
    const testGrammarCache = new Map<string, TestGrammarCache>();

    const testGrammar = vscode.commands.registerCommand(
        "extension.testGrammar",
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }
            const document = editor.document;
            const text = document.getText();

            if (text.length === 0) {
                return;
            }

            let nonterminals;
            let ast;
            try {
                [nonterminals, ast] = generateParserFromEBNF(text);
            } catch (e) {
                return;
            }

            const key = document.uri.toString();
            if (!testGrammarCache.has(key)) {
                testGrammarCache.set(key, {
                    nonterminal: "",
                    testString: "",
                });
            }
            const cache = testGrammarCache.get(key);

            const nonterminalString = await vscode.window.showInputBox({
                prompt: "Enter a nonterminal to test",
                placeHolder: "Type here...",
                value: cache.nonterminal,
            });
            if (!nonterminalString) {
                return;
            }
            cache.nonterminal = nonterminalString;

            const testString = await vscode.window.showInputBox({
                prompt: "Enter your test string",
                placeHolder: "Type here...",
                value: cache.testString,
            });

            if (!testString) {
                return;
            }
            cache.testString = testString;

            const parser = nonterminals[nonterminalString];
            const result = parser.parse(testString);
            if (!result) {
                vscode.window.showInformationMessage("No match");
            } else {
                vscode.window.showInformationMessage(`Matched: ${result}`);
            }
        }
    );
    context.subscriptions.push(testGrammar);
}
