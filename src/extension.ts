import { Parser } from "@mkbabb/parse-that";
import { generateParserFromEBNF } from "@mkbabb/parse-that/ebnf";

import * as vscode from "vscode";
import * as crypto from "crypto";

import { formatEBNF } from ".";

type TestGrammarCache = {
    nonterminal: string;
    testString: string;
};

export async function activate(context: vscode.ExtensionContext) {
    const diagnosticCollection = vscode.languages.createDiagnosticCollection("bbnf");
    diagnosticCollection.clear();

    const BBNFFileSelector = { language: "bbnf", scheme: "file" };

    const formatBBNF = vscode.languages.registerDocumentFormattingEditProvider(
        BBNFFileSelector,
        {
            provideDocumentFormattingEdits(
                document: vscode.TextDocument
            ): vscode.TextEdit[] {
                if (document.getText().length === 0) {
                    return [];
                }

                try {
                    let formatted = formatEBNF(document.getText());
                    diagnosticCollection.set(document.uri, []);

                    // find all strings like "$$$\w$$$" and their positions:
                    const undefinedVariableRegex = /\$\$\$(\w+)\$\$\$/g;
                    for (const match of formatted.matchAll(undefinedVariableRegex)) {
                        const [fullMatch, variableName] = match;

                        const diagnostic = new vscode.Diagnostic(
                            new vscode.Range(
                                document.positionAt(match.index),
                                document.positionAt(match.index + variableName.length)
                            ),
                            `Undefined variable: ${variableName}`,
                            vscode.DiagnosticSeverity.Error
                        );

                        diagnosticCollection.set(document.uri, [
                            ...(diagnosticCollection.get(document.uri) ?? []),
                            diagnostic,
                        ]);
                        formatted = formatted.replace(fullMatch, variableName);
                    }

                    return [
                        vscode.TextEdit.replace(
                            new vscode.Range(
                                document.positionAt(0),
                                document.positionAt(document.getText().length)
                            ),
                            formatted
                        ),
                    ];
                } catch (e) {
                    const { message, cause } = e;
                    const parser = cause as Parser;

                    const state = parser.state;

                    const lineNumber = state.getLineNumber();
                    const columnNumber = state.getColumnNumber();

                    console.error(e);

                    const diagnostic = new vscode.Diagnostic(
                        new vscode.Range(
                            lineNumber,
                            columnNumber,
                            lineNumber,
                            columnNumber + 1
                        ),
                        "Error parsing BBNF",
                        vscode.DiagnosticSeverity.Error
                    );

                    diagnosticCollection.set(document.uri, [diagnostic]);

                    return [];
                }
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
