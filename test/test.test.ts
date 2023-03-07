import { test, expect, describe, it } from "vitest";
import fs from "fs";
import { formatBBNF } from "../src/prettier-plugin-bbnf/";
import { BBNFToParser, ProductionRule } from "@mkbabb/parse-that/bbnf";
import { printBBNFAST } from "../src/utils/printer";

import prettier, { doc } from "prettier";

describe("Prettier EBNF", () => {
    it("should format a file", () => {
        const input = fs.readFileSync("./grammar/tmp.input.bbnf", "utf8");
        const s = formatBBNF(input);
        fs.writeFileSync("./grammar/tmp.output.bbnf", s, "utf8");
    });
});
