import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Tooltip } from "../Tooltip";

describe("Tooltip", () => {
  it("renders text content", () => {
    render(<Tooltip content="Hello tooltip" />);
    expect(screen.getByText("Hello tooltip")).toBeInTheDocument();
  });

  it("renders React node content", () => {
    render(
      <Tooltip
        content={
          <span>
            <strong>Bold</strong> content
          </span>
        }
      />,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies custom className along with base class", () => {
    const { container } = render(
      <Tooltip content="With class" className="custom-class another" />,
    );
    const root = container.firstElementChild as HTMLElement | null;
    expect(root).toBeTruthy();
    expect(root).toHaveClass("tooltip");
    expect(root).toHaveClass("custom-class");
    expect(root).toHaveClass("another");
  });

  it("renders the tooltip arrow element", () => {
    const { container } = render(<Tooltip content="Has arrow" />);
    const arrow = container.querySelector(".tooltip-arrow");
    expect(arrow).not.toBeNull();
  });

  it("handles empty content gracefully", () => {
    const { container } = render(<Tooltip content="" />);
    const root = container.querySelector(".tooltip");
    expect(root).not.toBeNull();
    const arrow = container.querySelector(".tooltip-arrow");
    expect(arrow).not.toBeNull();
  });
});
