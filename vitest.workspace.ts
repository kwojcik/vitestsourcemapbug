import { configDefaults, defineWorkspace } from "vitest/config";
import { CONFIG } from "./vitest.config";

const TESTS_NOT_FOR_BROWSER_MODE = [
  "test/foo.test.ts",
  "test/foo1.test.ts",
  "test/foo2.test.ts",
  "test/foo3.test.ts",
  "test/foo4.test.ts",
  "test/foo5.test.ts",
  "test/foo6.test.ts",
  "test/foo7.test.ts",
  "test/foo8.test.ts",
  "test/foo9.test.ts",
];

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
  {
    ...CONFIG,
    test: {
      ...CONFIG.test,
      name: "jsdom",
      environment: "jsdom",
      browser: undefined,
      include: TESTS_NOT_FOR_BROWSER_MODE,
    },
  },
]);
