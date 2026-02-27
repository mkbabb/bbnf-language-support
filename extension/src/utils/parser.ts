import {
    Expression,
    BBNFToAST,
    Nonterminal,
    ProductionRule,
    removeAllLeftRecursion,
    topologicalSort,
    AST,
} from "@mkbabb/bbnf-lang";

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

export function analyzeNonterminals(ast: AST) {
    const undefinedNonterminals = new Map() as Map<string, Nonterminal>;
    const findUndefinedNonterminals = (node: Expression) => {
        if (
            node.type === "nonterminal" &&
            !ast.has(node.value) &&
            !undefinedNonterminals.has(node.value)
        ) {
            undefinedNonterminals.set(node.value, node);
        }
    };

    const usedNonterminals = new Map() as Map<string, Nonterminal>;
    const findUnusedNonterminals = (node: Expression) => {
        if (node.type === "nonterminal" && !usedNonterminals.has(node.value)) {
            usedNonterminals.set(node.value, node);
        }
    };

    traverseAST(ast, (node) => {
        findUndefinedNonterminals(node);
        findUnusedNonterminals(node);
    });

    const unusedNonterminals = new Map() as Map<string, Nonterminal>;

    for (const [name, expression] of ast.entries()) {
        if (!usedNonterminals.has(name)) {
            unusedNonterminals.set(name, expression.name);
        }
    }

    return {
        undefinedNonterminals,
        unusedNonterminals,
    };
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
