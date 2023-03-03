import { builders as b } from "prettier/doc";
import { Nonterminal, Expression, Nonterminals } from "@mkbabb/parse-that/ebnf";
import prettier, { AST, AstPath, Doc, Options, Printer } from "prettier";

function print(node: Expression): Doc {
    switch (node.type) {
        case "literal":
            if (node.value === '"') {
                return b.group(["'", node.value, "'"]);
            }

            const s = node.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

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
        case "coalesce":
            return b.group([print(node.value[0]), " ?? ", print(node.value[1])]);
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
}

export function EBNFPrint(path: AstPath, options: Options): Doc {
    const node = path.getValue() as AST;
    options.tabWidth = 4;
    options.printWidth = 66;
    options.useTabs = false;

    const d = b.join(
        b.hardline,
        [...node.entries()].map(([name, expr]) => {
            const head = [name, " = "];
            const tail = [print(expr), " ;"];

            if (expr.type === "concatenation" || expr.type === "alternation") {
                return [...head, ...tail, b.hardline];
            } else {
                return [...head, ...tail];
            }
        })
    );

    return d;
}
