import { test, expect, describe, it, bench, BenchOptions } from "vitest";
import fs from "fs";
import { formatEBNF } from "../src";

const input = fs.readFileSync("./grammar/eebnf.ebnf", "utf8");
const options = {
    iterations: 100,
} as BenchOptions;

describe("Prettier EBNF", () => {
    bench(
        "format",
        () => {
            formatEBNF(input);
        },
        options
    );
});
