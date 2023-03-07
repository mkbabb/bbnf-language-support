import fs from "fs";
import { BBNFToParser, ProductionRule } from "@mkbabb/parse-that/bbnf";

export function createGigaAST(grammarFilepath: string, iterations: number = 1000) {
    const input = fs.readFileSync(grammarFilepath, "utf8");
    const [nonterminals, ast] = BBNFToParser(input);

    let outAST = new Map<string, ProductionRule>();

    for (let i = 0; i < iterations; i++) {
        for (const [key, value] of ast.entries()) {
            outAST.set(`${key}--${i}`, value);
        }
    }

    return outAST;
}
