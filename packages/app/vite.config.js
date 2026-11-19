/// <reference types="vitest/config" />

// import { playwright } from "@vitest/browser-playwright";
import { defineConfig, transformWithEsbuild, transformWithOxc } from "vite";
import minifyLit from "@lit-labs/rollup-plugin-minify-html-literals";
import { cemAnalyzerPlugin } from "@wc-toolkit/cem-analyzer-plugin/vite";

export default defineConfig(({ mode }) => {
    if (mode == "bundle") {
        // single-bundle components lib
        return {
            input: ["src/index.ts"],
            build: {
                target: "es2022",
                outDir: "dist",
                emptyOutDir: false,
                sourcemap: false,
                minify: true,
                lib: {
                    formats: ["es"],
                    fileName: "bundle",
                },
                rolldownOptions: {
                    output: {
                        minify: true,
                    },
                },
            },
            plugins: [
                minifyLit(),
                cemAnalyzerPlugin({
                    litelement: true,
                    globs: ["src/*.ts"],
                    outdir: "dist",
                    dependencies: true,
                    packagejson: false,
                }),
            ],
        };
    }

    // single-page demo app
    return {
        input: "index.html",
        build: {
            outDir: "dist/demo",
            minify: true,
            sourcemap: false,
        },
        plugins: [minifyLit()],
    };
});
