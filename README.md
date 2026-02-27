# bbnf-lang

_Better Backus-Naur Form_ — a monorepo for the BBNF grammar ecosystem.

BBNF is an extension to EBNF for defining context-free grammars, used by the
[`parse-that`](https://github.com/mkbabb/parse-that) parser combinator library.

## Structure

```
rust/                   Rust workspace
  bbnf/                 BBNF grammar framework (lib)
  bbnf-derive/          Proc-macro derive for BBNF
  lsp/                  Language Server Protocol server
typescript/             TS library (@mkbabb/bbnf-lang)
prettier-plugin-bbnf/   Prettier plugin for .bbnf files
extension/              VS Code extension (LSP client)
grammar/                Shared BBNF grammar files
```

## VS Code Extension

Full language support for `.bbnf` files:

- Syntax highlighting
- Diagnostics (parse errors, undefined/unused rules, left recursion)
- Go-to-definition, references, rename
- Hover with rule preview
- Completions
- Document symbols, code lens, folding
- Code actions
- Document & range formatting
- On-type formatting (`;` trigger)
- Semantic tokens
- Inlay hints (FIRST sets, nullability)
- Selection range (expand/shrink selection)

## Build & Test

### Rust

```bash
cd rust
cargo test --workspace    # requires nightly
cargo build --release -p bbnf-lsp
```

### TypeScript (bbnf-lang library)

```bash
cd typescript
npm ci && npm test
```

### Prettier Plugin

```bash
npm ci                # from repo root (workspace install)
cd typescript && npm run build
cd ../prettier-plugin-bbnf && npm test
```

### Extension

```bash
cd extension
npm ci && npm run build
```

## License

MIT
