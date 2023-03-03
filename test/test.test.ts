import { test, expect, describe, it } from "vitest";
import fs from "fs";
import { EBNFPlugin } from "../src/";

import prettier from "prettier";

describe("Prettier EBNF", () => {
    it("tmp", () => {
        const input = fs.readFileSync("./grammar/eebnf.ebnf", "utf8");
        const s = prettier.format(input, {
            parser: "ebnf",
            plugins: [EBNFPlugin],
        });
        fs.writeFileSync("./test/eebnf.out.ebnf", s, "utf8");
    });
});
