const languages = [
  {
    name: "EBNF",
    since: "0.1",
    parsers: ["ebnf"],
    extensions: [".ebnf"],
    tmScope: "ebnf.ebnf",
    aceMode: "text",
    linguistLanguageId: 666,
    vscodeLanguageIds: ["ebnf"]
  }
];
const printers = {
  ebnf: {
    print: EBNFPrint
  }
};
const parsers = {
  ebnf: {
    parse,
    astFormat: "ebnf",
    locStart,
    locEnd,
    preprocess
  }
};
const defaultOptions = {
  ebnf: {
    printWidth: 80,
    tabWidth: 4
  }
};
export {
  defaultOptions,
  languages,
  parsers,
  printers
};
//# sourceMappingURL=prettier-plugin-bbnf.js.map
