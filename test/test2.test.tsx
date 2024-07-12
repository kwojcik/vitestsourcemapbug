import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, it } from "vitest";

export default function Foo() {
  useLocation();
  return <>hi</>;
}

describe("Foo", () => {
  it("foos", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route key="/" element={<Foo />} />
        </Routes>
      </MemoryRouter>
    );
  });
});
