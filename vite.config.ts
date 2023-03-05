import { defineConfig, LibraryOptions, UserConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";

const EXTERNAL_DEPS = [
    "prettier",
    "chalk",
    "path",
    "vscode",
    "vscode-languageclient",
    "vscode-languageclient/node",
    "vscode-languageserver",
    "vscode-languageserver/node",
    "vscode-languageserver-textdocument",
];

const DEFAULT_CONFIG: Partial<UserConfig> = {
    build: {
        minify: false,
        outDir: "out",
        sourcemap: true,
        lib: { formats: ["cjs"] } as LibraryOptions,
        rollupOptions: {
            external: [...EXTERNAL_DEPS],
        },
    },

    plugins: [commonjs()],
};

function mergeConfigs(customConfig, defaultConfig = DEFAULT_CONFIG) {
    if (!defaultConfig) {
        return customConfig;
    }
    if (!customConfig) {
        return defaultConfig;
    }

    const mergedConfig = { ...defaultConfig };

    Object.keys(customConfig).forEach((key) => {
        if (
            typeof customConfig[key] === "object" &&
            !Array.isArray(customConfig[key]) &&
            typeof defaultConfig[key] === "object" &&
            !Array.isArray(defaultConfig[key])
        ) {
            mergedConfig[key] = mergeConfigs(customConfig[key], defaultConfig[key]);
        } else if (typeof customConfig[key] !== "undefined") {
            mergedConfig[key] = customConfig[key];
        }
    });

    return mergedConfig;
}

const createConfig = ({ mode }): UserConfig => {
    if (mode === "client") {
        return {
            root: "./client",
            build: {
                lib: {
                    entry: "./src/extension",
                    name: "extension",
                    fileName: "extension",
                },
            },
        };
    } else if (mode === "server") {
        return {
            root: "./server",
            build: {
                lib: {
                    entry: "./src/server",
                    name: "server",
                    fileName: "server",
                },
            },
        };
    }

    return {
        build: {
            lib: {
                name: "index",
                fileName: "index",
                entry: "./src/prettier-plugin-bbnf/index",
                formats: ["es"],
            },
        },
        test: {
            coverage: {
                provider: "c8",
                reporter: ["text", "json", "html"],
            },
            forceRerunTriggers: ["**/*.input.ebnf"],
        },
    };
};

export default defineConfig(({ mode }) => {
    const customConfig = createConfig({ mode });
    return mergeConfigs(customConfig, DEFAULT_CONFIG);
});
