import {
    Expression,
    BBNFToAST,
    Nonterminal,
    ProductionRule,
    removeAllLeftRecursion,
    topologicalSort,
    AST,
} from "@mkbabb/parse-that/bbnf";

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

export function findUndefinedNonterminals(ast: AST) {
    const undefinedNonterminals = new Map() as Map<string, Nonterminal>;

    traverseAST(ast, (node) => {
        if (
            node.type === "nonterminal" &&
            !ast.has(node.value) &&
            !undefinedNonterminals.has(node.value)
        ) {
            undefinedNonterminals.set(node.value, node);
        }
    });

    return undefinedNonterminals;
}

export function findUnusedNonterminals(ast: AST) {
    const usedNonterminals = new Map() as Map<string, Nonterminal>;

    traverseAST(ast, (node) => {
        if (node.type === "nonterminal" && !usedNonterminals.has(node.value)) {
            usedNonterminals.set(node.value, node);
        }
    });

    for (const [name, value] of ast.entries()) {
        if (usedNonterminals.has(name)) {
            usedNonterminals.delete(name);
        }
    }
    return usedNonterminals;
}

export function parse(text: string, parsers: object, options: object) {
    let [parser, ast] = BBNFToAST(text);

    if (parser.state.isError) {
        // @ts-ignore
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
