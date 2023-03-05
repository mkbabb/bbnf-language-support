import { test, expect, describe, it, bench, BenchOptions } from "vitest";
import fs from "fs";
import { formatBBNF } from "../src/prettier-plugin-bbnf";

const input = fs.readFileSync("./grammar/bbnf.bbnf", "utf8");
const options = {
    iterations: 100,
} as BenchOptions;

describe("Prettier BBNF", () => {
    bench(
        "format",
        () => {
            formatBBNF(input);
        },
        options
    );
});
