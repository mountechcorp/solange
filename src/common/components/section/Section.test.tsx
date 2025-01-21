import { render, screen } from "@testing-library/react";
import { Section } from "./Section";
import { describe, expect, test } from "vitest";

describe("Section component", () => {
  test("Should render the Section title", () => {
    render(<Section />);
    expect(screen.getByText("Section")).toBeDefined();
  });
});
