import { generateASTFromEBNF, topologicalSort } from "@mkbabb/parse-that/ebnf";

export function locStart(node: object): number {
    return 0;
}
export function locEnd(node: object): number {
    return 0;
}
export function preprocess(text: string, options: object): string {
    return text;
}

export function parse(text: string, parsers: object, options: object) {
    let ast = generateASTFromEBNF(text);

    ast = topologicalSort(ast);

    ast = [...ast.entries()]
        .reverse()
        .filter(([key]) => key)
        .reduce((acc, [key, value]) => {
            return acc.set(key, value);
        }, new Map());

    return ast;
}
