import { Parser } from "@mkbabb/parse-that";
import * as vscode from "vscode";

vscode.window.showInformationMessage("Vibes!");

import { formatEBNF } from ".";

export async function activate(context: vscode.ExtensionContext) {
    const diagnosticCollection = vscode.languages.createDiagnosticCollection("bbnf");
    diagnosticCollection.clear();

    const vibes = vscode.commands.registerCommand("extension.vibes", () => {
        vscode.window.showInformationMessage("Vibes!");
    });
    context.subscriptions.push(vibes);

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
                    const formatted = formatEBNF(document.getText());

                    diagnosticCollection.set(document.uri, []);

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
}
