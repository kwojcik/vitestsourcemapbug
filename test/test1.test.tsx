import { render } from "@testing-library/react";
import { redirect } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
vi.mock("react-router-dom", () => ({
  redirect: vi.fn(),
}));

function Bar() {
  redirect("broken");
  return <>hi</>;
}

describe("test with broken spy", () => {
  it("returns redirect response if key not included in param validation schema", () => {
    render(<Bar />);
    expect(vi.mocked(redirect)).toHaveBeenCalledOnce();
  });
});
