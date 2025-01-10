import { render, screen } from "@testing-library/react";
import { Banner } from "./Banner";
import { describe, expect, test } from "vitest";

describe("Banner component", () => {
  test("Should render the banner title", () => {
    render(<Banner />);
    expect(screen.getByText("Banner")).toBeDefined();
  });
});
