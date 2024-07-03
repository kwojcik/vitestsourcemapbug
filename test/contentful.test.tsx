import { createClient as contentfulCreateClient } from "contentful";
import { createClient as localCreateClient } from "../src/contentful.js";
import { vi, expect, describe, it } from "vitest";

const mocks = vi.hoisted(() => ({
  contentfulMock: vi.fn(),
  localMock: vi.fn(),
}));
vi.mock("contentful", () => ({
  createClient: mocks.contentfulMock,
}));
vi.mock("../src/contentful.js", () => ({
  createClient: mocks.localMock,
}));

describe("mocking", () => {
  describe("from contentful", () => {
    it("can make a client", () => {
      // this fails, it's undefined?
      contentfulCreateClient({
        accessToken: "accessToken",
        space: "space",
      });
      expect(mocks.contentfulMock).toHaveBeenCalled();
    });
  });
  describe("from local", () => {
    it("can make a client", () => {
      localCreateClient({
        accessToken: "accessToken",
        space: "space",
      });
      expect(mocks.localMock).toHaveBeenCalled();
    });
  });
});
