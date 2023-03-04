import { defineConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig(({ mode }) => {
    if (mode === "vscode") {
        return {
            base: "./",

            build: {
                outDir: "out",
                minify: false,
                sourcemap: true,

                lib: {
                    entry: "./src/extension.ts",
                    fileName: "extension",
                    formats: ["cjs"],
                },
                rollupOptions: {
                    external: ["vscode", "prettier", "chalk"],
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
                formats: ["es"],
            },
            rollupOptions: {
                external: ["chalk", "prettier"],
            },
        },

        test: {
            coverage: {
                provider: "c8",
                reporter: ["text", "json", "html"],
            },

            forceRerunTriggers: ["**/*.input.ebnf"],
        },

        plugins: [commonjs()],
    };
});
