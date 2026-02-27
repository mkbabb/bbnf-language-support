# <img src="extension/icons/bbnf-small.png" height="32" align="top" /> bbnf-lang

_Better Backus-Naur Form_ — a monorepo for the BBNF grammar ecosystem.

BBNF is an extension to EBNF for defining context-free grammars, used by the
[`parse-that`](https://github.com/mkbabb/parse-that) parser combinator library.

---

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

- Syntax highlighting & semantic tokens
- Diagnostics (parse errors, undefined/unused rules, left recursion, empty bodies)
- Go-to-definition, find references, rename
- Hover with rule preview
- Completions (all defined rule names)
- Document symbols, code lens (reference counts), folding
- Code actions
- Document formatting, range formatting, on-type formatting (`;`)
- Inlay hints (FIRST sets, nullability)
- Selection range (expand/shrink selection)
- Incremental text sync

## Build & Test

### Rust

```bash
cd rust
cargo test --workspace    # requires nightly (59 tests)
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

## Development

### Quick start

```bash
# Build the LSP binary
cd rust && cargo build -p bbnf-lsp && cd ..

# Copy to server/ (where extension looks by default)
cp rust/target/debug/bbnf-lsp server/bbnf-lsp

# Build the extension
cd extension && npm ci && npm run build && cd ..
```

Then open this repo in VS Code and press **F5** to launch the Extension Development
Host with the BBNF extension loaded.

### VS Code launch configurations

Two configs are provided in `.vscode/launch.json`:

| Config | What it does |
|--------|-------------|
| **Launch Extension** | Builds the extension, uses the release binary in `server/` |
| **Launch Extension (Debug LSP)** | Builds both LSP (debug) and extension, uses `rust/target/debug/bbnf-lsp` |

The extension reads the server path from (in priority order):

1. VS Code setting `BBNF.server.path`
2. Environment variable `BBNF_SERVER_PATH` (set by launch configs)
3. Bundled binary at `../server/bbnf-lsp` relative to the extension

### Developing the LSP

The Rust LSP server at `rust/lsp/` communicates over stdin/stdout using the
[LSP protocol](https://microsoft.github.io/language-server-protocol/). The
development loop:

```bash
# Edit rust/lsp/src/**/*.rs

# Run unit + integration tests (no VS Code needed)
cd rust && cargo test --workspace

# Rebuild and test in VS Code
cargo build -p bbnf-lsp
# Then F5 in VS Code to relaunch the extension host
```

**Integration tests** (`rust/lsp/tests/integration.rs`) spawn the compiled
`bbnf-lsp` binary as a subprocess, send raw JSON-RPC messages, and assert on
responses. This gives full end-to-end coverage without needing VS Code:

```bash
cargo test -p bbnf-lsp --test integration -- --nocapture
```

Current test coverage (33 integration tests):

- Initialize & capability negotiation
- Diagnostics: valid grammar, unused rules, undefined rules, parse errors, regex panics
- Hover, go-to-definition, references, rename, completion
- Document symbols, code lens, folding, code actions
- Full document formatting, range formatting, on-type formatting
- Semantic tokens
- Inlay hints (FIRST sets, nullability, range filtering)
- Selection range (single & multiple positions)
- Incremental text sync (insert, delete, replace)
- Large grammar (8-rule JSON grammar, all features combined)

### Developing the Prettier Plugin

```bash
# From repo root (npm workspaces resolve @mkbabb/bbnf-lang locally)
npm ci
cd typescript && npm run build   # must build bbnf-lang first
cd ../prettier-plugin-bbnf && npm test
```

### VS Code tasks

Available via **Terminal > Run Task**:

| Task | Description |
|------|-------------|
| Build Extension | `npm run build` in extension/ |
| Build LSP (Release) | `cargo build --release -p bbnf-lsp` |
| Build LSP (Debug) | `cargo build -p bbnf-lsp` |
| Build All (Debug) | LSP + extension sequentially |
| Test LSP | `cargo test --workspace` |

## License

MIT
