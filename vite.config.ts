import { defineConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig(({ mode }) => ({
    base: "./",

    build: {
        minify: false,
        sourcemap: true,
        lib: {
            entry: "./src/index.ts",
            name: "prettier-plugin-bbnf",
            formats: ["es"],
        },
    },

    test: {
        include: ["test/*.test.ts"],

        coverage: {
            provider: "c8",
            reporter: ["text", "json", "html"],
        },
        cache: false,
        watch: true,
        // forceRerunTriggers: ["**/*.ebnf/**"],
    },

    plugins: [
        commonjs(),
        nodeResolve({
            modulesOnly: true,
            browser: false,
            exportConditions: ["node"],
            preferBuiltins: true,
        }),
    ],
}));
