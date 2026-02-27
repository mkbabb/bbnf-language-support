import { builders as b, printer } from "prettier/doc";
import { AstPath, Doc, Options } from "prettier";
import { Expression, ProductionRule, AST } from "@mkbabb/bbnf-lang";

function printScope(node: Expression, scope?: AST): Doc {
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
                    return node.value;
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
            let left = node.comment.left.map((v) => v.value).join(" ");
            let right = node.comment.right.map((v) => v.value).join(" ");

            left = left ? left + " " : left;
            right = right ? " " + right : right;

            return b.group([left, s, right]);
        }

        return s;
    }

    return print(node);
}

export function printBBNFAST(ast: AST): Doc {
    const d = b.join(
        b.hardline,
        [...ast.entries()].map(([name, rule]: [string, ProductionRule]) => {
            const { expression, comment } = rule;

            const line = [name, " = ", printScope(expression, ast), " ;"];

            const above = comment?.above?.length
                ? [
                      b.join(
                          b.hardline,
                          comment.above.map((v) => v.value)
                      ),
                      b.hardline,
                  ]
                : [];
            const below = comment?.below?.length
                ? [
                      b.join(
                          b.hardline,
                          comment.below.map((v) => v.value)
                      ),
                  ]
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

export function printBBNF(path: AstPath, options: Options): Doc {
    const ast = path.getValue() as AST;
    if (!ast) {
        return "";
    }

    options.printWidth = 66;

    return printBBNFAST(ast);
}

export function printExpressionToString(node: Expression): string {
    if (!node) {
        return "";
    }

    if (typeof node === "string") {
        return node;
    }

    return printer.printDocToString(printScope(node), {
        printWidth: 66,
        tabWidth: 2,
        useTabs: false,
    }).formatted;
}
