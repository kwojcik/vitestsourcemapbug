import { expect, test } from "vitest";

test("passes", () => {
  expect(true).toBe(true);
});

test("fails", async () => {
  setTimeout(() => {
    throw new Error("oops");
  }, 100);
  await new Promise((r) => setTimeout(r, 1000));
});
