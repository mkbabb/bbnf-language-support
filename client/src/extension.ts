import path from "path";
import vscode from "vscode";

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind,
} from "vscode-languageclient/node";
import { BBNFToParser } from "@mkbabb/parse-that/bbnf";

const DOCUMENT_SELECTOR = {
    language: "bbnf",
    scheme: "file",
} as vscode.DocumentSelector;

let LANGUAGE_CLIENT: LanguageClient;

type TestGrammarCache = {
    nonterminal: string;
    testString: string;
};
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

        let nonterminals, ast;
        try {
            [nonterminals, ast] = BBNFToParser(text);
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
        const cache = testGrammarCache.get(key)!;

        const nonterminalString = await vscode.window.showInputBox({
            prompt: "Enter a nonterminal to test",
            placeHolder: "Type here...",
            value: cache.nonterminal,
        });

        if (!nonterminalString || !nonterminals[nonterminalString]) {
            vscode.window.showErrorMessage(
                `Nonterminal ${nonterminalString} not found`
            );
            return;
        }

        cache.nonterminal = nonterminalString;

        const testString = await vscode.window.showInputBox({
            prompt: "Enter your test string",
            placeHolder: "Type here...",
            value: cache.testString,
        });

        if (!testString) {
            vscode.window.showErrorMessage("No test string provided");
            return;
        }
        cache.testString = testString;

        const parser = nonterminals[nonterminalString];
        const result = parser.parse(testString);

        if (!result) {
            vscode.window.showInformationMessage("No match X");
        } else {
            vscode.window.showInformationMessage(`Matched ✓: ${result}`);
        }
    }
);

export function activate(context: vscode.ExtensionContext) {
    // The server is implemented in node
    const serverModule = context.asAbsolutePath(
        path.join("server", "out", "server.js")
    );

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
        },
    };

    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
        // Register the server for plain text documents
        documentSelector: [DOCUMENT_SELECTOR] as any,
        synchronize: {
            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: vscode.workspace.createFileSystemWatcher("**/.clientrc"),
        },
    };

    // Create the language client and start the client.
    LANGUAGE_CLIENT = new LanguageClient(
        "languageServerExample",
        "Language Server Example",
        serverOptions,
        clientOptions
    );

    // Start the client. This will also launch the server
    LANGUAGE_CLIENT.start();

    context.subscriptions.push(testGrammar);
}

export function deactivate(): Thenable<void> | undefined {
    if (!LANGUAGE_CLIENT) {
        return undefined;
    }
    return LANGUAGE_CLIENT.stop();
}
