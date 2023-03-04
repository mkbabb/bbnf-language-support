import { builders as b } from "prettier/doc";
import { Expression, ProductionRule } from "@mkbabb/parse-that/ebnf";
import { AST, AstPath, Doc, Options } from "prettier";

function printScope(node: Expression, scope: AST): Doc {
    function print(node: Expression): Doc {
        if (!node) {
            return "";
        }

        const innerPrint = () => {
            switch (node.type) {
                case "literal":
                    if (node.value === '"') {
                        return b.group(["'", node.value, "'"]);
                    }
                    const s = node.value;
                    return b.group(['"', s, '"']);
                case "nonterminal":
                    if (scope.has(node.value)) {
                        return node.value;
                    }
                    return b.group(["$$$", node.value, "$$$"]);
                case "epsilon":
                    return "ε";
                case "group":
                    return b.group([
                        "( ",
                        b.indent(print(node.value)),
                        b.softline,
                        " )",
                    ]);
                case "regex":
                    return b.group(["/", node.value.source, "/", node.value.flags]);
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
                    return b.group([
                        print(node.value[0]),
                        " << ",
                        print(node.value[1]),
                    ]);
                case "next":
                    return b.group([
                        print(node.value[0]),
                        " >> ",
                        print(node.value[1]),
                    ]);
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
            const left = node.comment.left.length ? node.comment.left + " " : "";
            const right = node.comment.right.length ? " " + node.comment.right : "";
            return b.group([left, s, right]);
        }

        return s;
    }

    return print(node);
}

export function EBNFPrint(path: AstPath, options: Options): Doc {
    const ast = path.getValue() as AST;
    if (!ast) {
        return "";
    }

    options.printWidth = 66;

    const d = b.join(
        b.hardline,
        [...ast.entries()].map(([name, rule]: [string, ProductionRule]) => {
            const { expression, comment } = rule;

            const line = [name, " = ", printScope(expression, ast), " ;"];
            const above = comment?.above?.length
                ? [b.join(b.hardline, comment.above), b.hardline]
                : [];
            const below = comment?.below?.length
                ? [b.join(b.hardline, comment.below)]
                : [];

            const commentedLine = b.group([above, line, " ", b.lineSuffix(below)]);

            if (
                expression.type === "concatenation" ||
                expression.type === "alternation"
            ) {
                return b.group([commentedLine, b.hardline]);
            }
            return commentedLine;
        })
    );

    return d;
}
