import { Parser } from "@mkbabb/parse-that";
import { AST, generateASTFromEBNF } from "@mkbabb/parse-that/ebnf";

import { printExpressionToString } from "../../src/utils/printer";
import {
    findUndefinedNonterminals,
    findUnusedNonterminals,
} from "../../src/utils/parser";

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

export const diagnoseUndefinedVariables = (ast: AST, document: TextDocument) => {
    const undefinedNonterminals = findUndefinedNonterminals(ast);

    const diagnostics = [] as Diagnostic[];

    for (const match of undefinedNonterminals) {
        let { value: name, offset } = match;
        offset ??= 0;

        const diagnostic = {
            range: {
                start: document.positionAt(offset - name.length - 1),
                end: document.positionAt(offset - 1),
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

export const diagnoseUnusedVariables = (ast: AST, document: TextDocument) => {
    const unusedNonterminals = findUnusedNonterminals(ast);
    const diagnostics = [] as Diagnostic[];

    for (const match of unusedNonterminals) {
        let { name } = match;

        const diagnostic = {
            message: `Unused variable: "${name}"`,
            code: "unused-variable",
            severity: DiagnosticSeverity.Information,
            range: Range.create(0, 0, 0, 0),
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
        let [parser, ast] =generateASTFromEBNF(text);

        if (parser.state?.isError || !ast) {
            return [diagnoseParsingError(parser)];
        }
        return [
            ...diagnoseUndefinedVariables(ast, document),
            ...diagnoseUnusedVariables(ast, document),
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
