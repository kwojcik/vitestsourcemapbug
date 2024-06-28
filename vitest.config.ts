/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
    // environment: "jsdom",
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: true,
    },
  },
});
