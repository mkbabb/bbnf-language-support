import { test, expect, describe, it, bench, BenchOptions } from "vitest";
import fs from "fs";
import { formatBBNF } from "../src/prettier-plugin-bbnf";
import { createGigaAST } from "./utils";
import { printBBNFAST } from "../src/utils/printer";

import prettier, { doc } from "prettier";
import { BBNFToAST } from "@mkbabb/parse-that/bbnf";

const options = {
    iterations: 1,
} as BenchOptions;

const inputFilepath = "./grammar/giga.bbnf";
const gigaFilePath = "./grammar/giga.output.bbnf";

const gigaFileString = fs.readFileSync(gigaFilePath, "utf8");

const gigaAST = createGigaAST(inputFilepath, 10000);

const parser = () => {
    BBNFToAST(gigaFileString);
};

const printer = () => {
    const d = printBBNFAST(gigaAST);
    return doc.printer.printDocToString(d, {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
    }).formatted;
};

const parserPrinter = () => {
    const [, ast] = BBNFToAST(gigaFileString);
    const d = printBBNFAST(ast!);
    return doc.printer.printDocToString(d, {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
    }).formatted;
};

fs.writeFileSync(gigaFilePath, printer(), "utf8");

describe("Prettier BBNF", () => {
    // bench("Parse a giga file", () => {
    //     parser();
    // });
    bench(
        "Print a giga file",
        () => {
            printer();
        },
        options
    );
    // bench("Parse and print a giga file", () => {
    //     parserPrinter();
    // });
});
