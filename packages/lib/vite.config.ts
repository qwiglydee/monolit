/// <reference types="vitest/config" />

import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

export default defineConfig({
    appType: "custom",
    mode: "development",
    test: {
        browser: {
            enabled: true,
            headless: true,

            provider: playwright(),
            instances: [{ browser: "chromium" }],
        },
        testTimeout: 3000,
        expect: {
            poll: {
                timeout: 1000,
            },
        },
    },
});
