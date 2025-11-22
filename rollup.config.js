
import { defineConfig } from "rollup";
import ts_plugin from "@rollup/plugin-typescript";

export default [
    defineConfig({
        input: "src/main.ts",
        output: {
            file: "dist/main.js",
            format: "esm",
            sourcemap: false
        },
        plugins: [ts_plugin()]
    }),
];