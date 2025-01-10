import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";
import { describe, expect, test } from "vitest";

describe("Contact component", () => {
  test("Should render the Contact title", () => {
    render(<Contact />);
    expect(screen.getByText("Contact")).toBeDefined();
  });
});
