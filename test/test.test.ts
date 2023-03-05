import { test, expect, describe, it } from "vitest";
import fs from "fs";
import { formatBBNF } from "../src/prettier-plugin-bbnf/";

describe("Prettier EBNF", () => {
    it("tmp", () => {
        const input = fs.readFileSync("./grammar/tmp.input.ebnf", "utf8");
        const s = formatBBNF(input);
        fs.writeFileSync("./grammar/tmp.output.ebnf", s, "utf8");
    });
});
