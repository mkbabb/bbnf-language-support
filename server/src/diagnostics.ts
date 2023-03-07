import { Parser } from "@mkbabb/parse-that";
import { AST, BBNFToAST, Nonterminal } from "@mkbabb/parse-that/bbnf";

import { printExpressionToString } from "../../src/utils/printer";
import { analyzeNonterminals } from "../../src/utils/parser";

import { TextDocument } from "vscode-languageserver-textdocument";
import { Diagnostic, DiagnosticSeverity, Range } from "vscode-languageserver";

import { hasDiagnosticRelatedInformationCapability } from "./server";

export const diagnoseParsingError = (parser: Parser<any>) => {
    const state = parser.state;

    const lineNumber = state?.getLineNumber() ?? 0;
    const columnNumber = state?.getColumnNumber() ?? 0;

    return {
        range: {
            start: { line: lineNumber, character: columnNumber },
            end: { line: lineNumber, character: columnNumber + 1 },
        },
        message:
            "Error parsing BBNF, last value was: " +
            printExpressionToString(state?.value),
        severity: DiagnosticSeverity.Error,
    } as Diagnostic;
};

export const diagnoseUndefinedVariables = (
    undefinedNonterminals: Map<string, Nonterminal>,
    document: TextDocument
) => {
    const diagnostics = [] as Diagnostic[];

    for (const [name, match] of undefinedNonterminals) {
        let { range } = match;
        const start = range?.start ?? 0;
        const end = range?.end ?? 0;

        const diagnostic = {
            range: {
                start: document.positionAt(start),
                end: document.positionAt(end),
            },
            code: "undefined-variable",
            message: `Undefined variable: "${name}"`,
            severity: DiagnosticSeverity.Warning,
        } as Diagnostic;

        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: document.uri,
                        range: Object.assign({}, diagnostic.range),
                    },
                    message: "Undefined variable",
                },
            ];
        }

        diagnostics.push(diagnostic);
    }

    return diagnostics;
};

export const diagnoseUnusedVariables = (
    unusedNonterminals: Map<string, Nonterminal>,
    document: TextDocument
) => {
    const diagnostics = [] as Diagnostic[];

    for (const [name, match] of unusedNonterminals) {
        let { range } = match;
        const start = range?.start ?? 0;
        const end = range?.end ?? 0;

        const diagnostic = {
            message: `Unused variable: "${name}"`,
            code: "unused-variable",
            severity: DiagnosticSeverity.Information,
            range: {
                start: document.positionAt(start),
                end: document.positionAt(end),
            },
        } as Diagnostic;

        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: document.uri,
                        range: Object.assign({}, diagnostic.range),
                    },
                    message: "Unused variable",
                },
            ];
        }

        diagnostics.push(diagnostic);
    }
    return diagnostics;
};

export const diagnose = (text: string, document: TextDocument): Diagnostic[] => {
    try {
        let [parser, ast] = BBNFToAST(text);

        if (parser.state?.isError || !ast) {
            return [diagnoseParsingError(parser)];
        }

        const { undefinedNonterminals, unusedNonterminals } = analyzeNonterminals(ast);

        return [
            ...diagnoseUndefinedVariables(undefinedNonterminals, document),
            ...diagnoseUnusedVariables(unusedNonterminals, document),
        ].filter((x) => x !== undefined);
    } catch (e) {
        const q = e;

        console.log(q);

        return [
            {
                range: {
                    start: { line: 0, character: 0 },
                    end: { line: 0, character: 0 },
                },
                message: "Error diagnosing BBNF",
                severity: DiagnosticSeverity.Error,
            },
        ];
    }
};
