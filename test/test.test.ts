import { test, expect, describe, it } from "vitest";
import fs from "fs";
import { formatEBNF, EBNFPlugin } from "../src/";

describe("Prettier EBNF", () => {
    it("tmp", () => {
        const input = fs.readFileSync("./grammar/eebnf.ebnf", "utf8");
        const s = formatEBNF(input);
        fs.writeFileSync("./test/eebnf.out.ebnf", s, "utf8");
    });
});
