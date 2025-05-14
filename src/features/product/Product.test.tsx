import { render, screen } from "@testing-library/react";
import { Product } from "./Product";
import { describe, expect, test } from "vitest";

describe("Product component", () => {
  test("Should render the Product title", () => {
    render(<Product />);
    expect(screen.getByText("Products")).toBeDefined();
  });
});
