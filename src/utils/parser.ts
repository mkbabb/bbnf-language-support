import {
    Expression,
    generateASTFromEBNF,
    Nonterminal,
    ProductionRule,
    removeAllLeftRecursion,
    topologicalSort,
} from "@mkbabb/parse-that/ebnf";

export function locStart(node: object): number {
    return 0;
}
export function locEnd(node: object): number {
    return 0;
}
export function preprocess(text: string, options: object): string {
    return text;
}

export function traverseAST(
    ast: Map<string, any>,
    callback: (node: Expression) => void
) {
    const stack: Expression[] = [...ast.values()].map((x) => x.expression).reverse();

    while (stack.length > 0) {
        const node = stack.pop();
        if (!node?.type) continue;

        callback(node);

        if (node.value instanceof Array) {
            for (let i = node.value.length - 1; i >= 0; i--) {
                stack.push(node.value[i]);
            }
        } else {
            stack.push(node.value as any);
        }
    }
}

export function findUndefinedNonterminals(ast: Map<string, any>) {
    const undefinedNonterminals = [] as Nonterminal[];

    traverseAST(ast, (node) => {
        if (node.type === "nonterminal" && !ast.has(node.value)) {
            undefinedNonterminals.push(node);
        }
    });
    return undefinedNonterminals;
}

export function findUnusedNonterminals(ast: Map<string, any>) {
    const usedNonterminals = new Set();

    traverseAST(ast, (node) => {
        if (node.type === "nonterminal") {
            usedNonterminals.add(node.value);
        }
    });
    const unusedNonterminals = [] as ProductionRule[];
    for (const [name, value] of ast.entries()) {
        if (!usedNonterminals.has(name)) {
            unusedNonterminals.push(value);
        }
    }
    return unusedNonterminals;
}

export function parse(text: string, parsers: object, options: object) {
    let [parser, ast] = generateASTFromEBNF(text);

    if (parser.state.isError) {
        throw new Error(`Error parsing EBNF: ${parser.state}`, {
            cause: parser,
        });
    }

    // ast = removeAllLeftRecursion(ast);
    let prettierAST;
    // @ts-ignore
    if (options.sort) {
        prettierAST = [...topologicalSort(ast).entries()].reverse();
    } else {
        prettierAST = [...ast.entries()];
    }

    return prettierAST
        .filter(([key]) => key)
        .reduce((acc, [key, value]) => {
            return acc.set(key, value);
        }, new Map());
}
