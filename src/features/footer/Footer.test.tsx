import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { describe, expect, test } from "vitest";

describe("Footer component", () => {
  test("Should render the Footer title", () => {
    render(<Footer />);
    expect(screen.getByText("Footer")).toBeDefined();
  });
});
