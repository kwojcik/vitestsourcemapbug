import { describe, expect, it } from "vitest";

describe("foo", () => {
  for (let i = 0; i < 1000; i++) {
    it(`should work ${i}`, () => {
      expect(i).toBe(i);
    });
  }
});
