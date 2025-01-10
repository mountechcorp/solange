import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, expect, test } from "vitest";

describe("Header component", () => {
  test("Should render the Header title", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeDefined();
  });
});
