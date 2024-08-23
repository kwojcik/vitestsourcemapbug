/// <reference types="vitest" />

import { defineConfig } from "vite";

export const CONFIG = {
  test: {
    fileParallelism: false,
    setupFiles: ["./vitest.setup.ts"],
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: true,
    },
    coverage: {
      provider: "istanbul",
      reporter: ["cobertura", "html", "text"],
    },
  },
};
export default defineConfig(CONFIG);
