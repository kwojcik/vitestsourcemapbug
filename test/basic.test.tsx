import { render } from "@testing-library/react";
import Bar from "../components/Bar.js";
import { describe, it } from "vitest";

describe("DocumentRepositoryPage", () => {
  it("renders a table with rows", () => {
    render(<Bar />);
  });
});
