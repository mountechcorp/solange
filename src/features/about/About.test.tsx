import { render, screen } from "@testing-library/react";
import { About } from "./About";
import { describe, expect, test } from "vitest";

describe("About component", () => {
  test("Should render the About title", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeDefined();
  });
});
