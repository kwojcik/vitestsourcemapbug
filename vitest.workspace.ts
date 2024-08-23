import { configDefaults, defineWorkspace } from "vitest/config";
import { CONFIG } from "./vitest.config";

const TESTS_NOT_FOR_BROWSER_MODE = [];

// Setup multiple workspaces so that we can run tests that look like
// *.jsdom.test.* in jsdom and the rest in the browser. Some tests
// are not possible to run in the browser.
export default defineWorkspace([
  {
    ...CONFIG,
    test: {
      ...CONFIG.test,
      name: "browser",
      exclude: [...configDefaults.exclude, ...TESTS_NOT_FOR_BROWSER_MODE],
    },
  },
]);
