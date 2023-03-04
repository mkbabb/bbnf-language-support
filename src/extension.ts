import * as vscode from "vscode";

import { formatEBNF } from ".";

export async function activate(context: vscode.ExtensionContext) {
    const vibes = vscode.commands.registerCommand("extension.vibes", () => {
        vscode.window.showInformationMessage("Vibes!");
    });
    context.subscriptions.push(vibes);

    const BBNFFileSelector = { language: "bbnf", scheme: "file" };

    const softBBNF = vscode.commands.registerCommand("extension.sort", () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);

            const formatted = formatEBNF(text, { sort: true });
            if (!formatted) {
                vscode.window.showInformationMessage("Formatting failed.");
                return;
            }

            editor.edit((editBuilder) => {
                editBuilder.replace(selection, formatted);
            });
        }
    });
    context.subscriptions.push(softBBNF);

    const formatBBNF = vscode.languages.registerDocumentFormattingEditProvider(
        BBNFFileSelector,
        {
            provideDocumentFormattingEdits(
                document: vscode.TextDocument
            ): vscode.TextEdit[] {
                vscode.window.showInformationMessage("formattin");
                if (document.getText().length === 0) {
                    return [];
                }

                const formatted = formatEBNF(document.getText());
                if (!formatted) {
                    vscode.window.showInformationMessage("Formatting failed.");
                    return [];
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
            },
        }
    );
    context.subscriptions.push(formatBBNF);
}
