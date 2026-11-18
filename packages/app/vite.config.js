/// <reference types="vitest/config" />

// import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";
import minifyLit from "@lit-labs/rollup-plugin-minify-html-literals";
import { cemAnalyzerPlugin } from "@wc-toolkit/cem-analyzer-plugin/vite";

const basename = "myapp-";

export default defineConfig({
    input: "main.html",
    build: {
        outDir: "dist",
        assetsDir: "",
        minify: true,
        sourcemap: false,
        rolldownOptions: {
            output: {
                entryFileNames: `${basename}[name].js`,
            },
        },
    },
    plugins: [
        minifyLit(),
        cemAnalyzerPlugin({
            litelement: true,
            globs: ["src/*.ts"],
            // outdir: "dist", // doesn't work
            dependencies: true,
            packagejson: false,
        }),
    ],
});
