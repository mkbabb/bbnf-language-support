import { builders as b } from "prettier/doc";
import { Expression, ProductionRule } from "@mkbabb/parse-that/ebnf";
import prettier, { AST, AstPath, Doc, Options, Printer } from "prettier";

function print(node: Expression): Doc {
    const innerPrint = () => {
        switch (node.type) {
            case "literal":
                if (node.value === '"') {
                    return b.group(["'", node.value, "'"]);
                }
                const s = node.value;
                return b.group(['"', s, '"']);
            case "nonterminal":
                return node.value;
            case "epsilon":
                return "ε";
            case "group":
                return b.group(["( ", b.indent(print(node.value)), b.softline, " )"]);
            case "regex":
                return b.group(["/", node.value.source, "/"]);
            case "optional":
                return b.group([print(node.value), "?"]);
            case "optionalWhitespace":
                return b.group([print(node.value), "?w"]);
            case "minus":
                return b.group([print(node.value[0]), " - ", print(node.value[1])]);
            case "many":
                return b.group([print(node.value), "*"]);
            case "many1":
                return b.group([print(node.value), "+"]);
            case "skip":
                return b.group([print(node.value[0]), " << ", print(node.value[1])]);
            case "next":
                return b.group([print(node.value[0]), " >> ", print(node.value[1])]);
            case "concatenation": {
                const delim = " , ";
                return b.group([
                    b.indent([
                        b.softline,
                        b.join(
                            [b.conditionalGroup([b.softline]), delim],
                            node.value.map((x) => print(x))
                        ),
                    ]),
                ]);
            }
            case "alternation": {
                const delim = " | ";
                return b.group([
                    b.indent([
                        b.softline,

                        b.join(
                            [b.conditionalGroup([b.softline]), delim],
                            node.value.map((x) => print(x))
                        ),
                    ]),
                ]);
            }
        }
    };

    const s = innerPrint();
    if (node.comment) {
        return b.group([s, " ", node.comment, " "]);
    }

    return s;
}

export function EBNFPrint(path: AstPath, options: Options): Doc {
    const node = path.getValue() as AST;

    const d = b.join(
        b.hardline,
        [...node.entries()].map(([name, rule]: [string, ProductionRule]) => {
            const { expression, comment } = rule;

            const head = [name, " = "];
            const tail = [print(expression), " ;"];
            const line = (() => {
                if (
                    expression.type === "concatenation" ||
                    expression.type === "alternation"
                ) {
                    return [...head, ...tail, b.hardline];
                }
                return [...head, ...tail];
            })();

            const above = comment.above ?? [];
            const below = comment.below ?? [];

            return b.join(b.hardline, [...above, line, ...below]);
        })
    );

    return d;
}
