/// <reference types="vitest/config" />

// import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";
import minifyLit from "@lit-labs/rollup-plugin-minify-html-literals";

export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "",
        minify: true,
        sourcemap: false,
    },
    plugins: [minifyLit()],
});
