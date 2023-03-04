import * as vscode from "vscode";

import { formatEBNF } from ".";

export async function activate(context: vscode.ExtensionContext) {
    const vibes = vscode.commands.registerCommand("extension.vibes", () => {
        vscode.window.showInformationMessage("Vibes!");
    });
    context.subscriptions.push(vibes);

    const selector = { language: "bbnf", scheme: "file" };
    const fmt = vscode.languages.registerDocumentFormattingEditProvider(selector, {
        provideDocumentFormattingEdits(
            document: vscode.TextDocument
        ): vscode.TextEdit[] {
            vscode.window.showInformationMessage("formattin");
            if (document.getText().length === 0) {
                return [];
            }

            const formatted = formatEBNF(document.getText());
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
    });
    context.subscriptions.push(fmt);
}
