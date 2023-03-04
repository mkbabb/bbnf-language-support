import { defineConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig(({ mode }) => {
    if (mode === "vscode") {
        return {
            base: "./",

            build: {
                outDir: "out",
                minify: true,
                sourcemap: true,
                lib: {
                    entry: "./src/extension.ts",
                    fileName: "extension",
                    formats: ["es", "cjs"],
                },
                rollupOptions: {
                    external: ["vscode"],
                    output: {
                        globals: {
                            vscode: "vscode",
                        },
                    },
                },
            },

            plugins: [commonjs()],
        };
    }
    return {
        base: "./",

        build: {
            outDir: "out",
            sourcemap: true,

            lib: {
                entry: "./src/index.ts",
                name: "prettier-plugin-bbnf",
                formats: ["es", "cjs"],
            },
            rollupOptions: {
                external: ["prettier"],
            },
        },

        test: {
            coverage: {
                provider: "c8",
                reporter: ["text", "json", "html"],
            },
            forceRerunTriggers: ["./grammar/*.ebnf", "./grammar/*.bbnf"],
        },

        plugins: [commonjs()],
    };
});
