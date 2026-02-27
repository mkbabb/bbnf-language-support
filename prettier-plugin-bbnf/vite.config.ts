import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    base: "./",

    build: {
        minify: false,
        sourcemap: true,
        lib: {
            entry: {
                "prettier-plugin-bbnf": "./src/index.ts",
            },
            formats: ["es"],
        },
        rollupOptions: {
            external: ["prettier", "prettier/doc", "@mkbabb/bbnf-lang"],
        },
    },

    plugins: [dts()],
});
