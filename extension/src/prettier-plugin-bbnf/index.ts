import { locStart, parse, preprocess, locEnd } from "../utils/parser";
import { printBBNF } from "../utils/printer";

import prettier, { Plugin } from "prettier";

export const languages = [
    {
        name: "BBNF",
        since: "0.1",
        parsers: ["bbnf"],
        extensions: [".bbnf"],
        tmScope: "bbnf.bbnf",
        aceMode: "text",
        linguistLanguageId: 666,
        vscodeLanguageIds: ["bbnf"],
    },
];

const printers = {
    bbnf: {
        print: printBBNF,
    },
};

const parsers = {
    bbnf: {
        parse,
        astFormat: "bbnf",
        locStart,
        locEnd,
        preprocess,
    },
};

const defaultOptions = {
    bbnf: {
        printWidth: 66,
        tabWidth: 4,
        useTabs: false,
    },
};

export const BBNFPlugin = {
    languages,
    printers,
    parsers,
    defaultOptions,
} as Plugin;

export const formatBBNF = (grammar: string, options?) => {
    return prettier.format(grammar, {
        parser: "bbnf",
        plugins: [BBNFPlugin],

        ...defaultOptions,
        ...(options ?? {}),
    });
};
