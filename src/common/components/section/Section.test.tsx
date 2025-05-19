import { render, screen } from "@testing-library/react";
import { Section } from "./Section";
import { describe, expect, test } from "vitest";

describe("Section component", () => {
  test("Should render the Section title", () => {
    render(
      <Section title="test" id="test">
        Section
      </Section>
    );
    expect(screen.getByText("Section")).toBeDefined();
  });
});
