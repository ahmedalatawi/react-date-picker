import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Calendar } from "../Calendar";
import { enUS, ja } from "date-fns/locale";

describe("Calendar", () => {
  const defaultProps = {
    currentDate: new Date("2024-03-15"),
    onDateClick: vi.fn(),
    onDateHover: vi.fn(),
    onPrevMonth: vi.fn(),
    onNextMonth: vi.fn(),
    onMonthSelect: vi.fn(),
    onYearSelect: vi.fn(),
    mode: "single" as const,
    disabledDates: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders calendar with correct month and year", () => {
    render(<Calendar {...defaultProps} />);
    expect(screen.getByText("March")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
  });

  it("handles month navigation", async () => {
    render(<Calendar {...defaultProps} />);
    await userEvent.click(screen.getByLabelText("Previous month"));
    expect(defaultProps.onPrevMonth).toHaveBeenCalled();

    await userEvent.click(screen.getByLabelText("Next month"));
    expect(defaultProps.onNextMonth).toHaveBeenCalled();
  });

  it("supports different locales", () => {
    const { rerender } = render(<Calendar {...defaultProps} locale={enUS} />);
    expect(screen.getByText("Sun")).toBeInTheDocument();

    rerender(<Calendar {...defaultProps} locale={ja} />);
    expect(screen.getByText("日")).toBeInTheDocument();
  });

  it("handles date selection", async () => {
    render(<Calendar {...defaultProps} />);
    await userEvent.click(screen.getByText("20"));
    expect(defaultProps.onDateClick).toHaveBeenCalled();
  });

  it("shows disabled dates correctly", () => {
    const disabledDates = [new Date("2024-03-10")];
    render(<Calendar {...defaultProps} disabledDates={disabledDates} />);
    const disabledDay = screen.getByText("10");
    expect(disabledDay).toHaveClass("disabled");
  });

  it("handles month selection view", async () => {
    render(<Calendar {...defaultProps} />);
    await userEvent.click(screen.getByText("March"));
    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("Dec")).toBeInTheDocument();
  });

  it("handles year selection view", async () => {
    render(<Calendar {...defaultProps} />);
    await userEvent.click(screen.getByText("2024"));
    const years = screen
      .getAllByRole("button")
      .filter((button) => /^\d{4}$/.test(button.textContent || ""));
    expect(years).toHaveLength(12);
  });

  it("supports range selection mode", () => {
    const rangeProps = {
      ...defaultProps,
      mode: "range" as const,
      selectedRange: [new Date("2024-03-15"), new Date("2024-03-20")] as [
        Date,
        Date,
      ],
    };
    render(<Calendar {...rangeProps} />);
    const startDate = screen.getByText("15");
    const endDate = screen.getByText("20");
    expect(startDate).toHaveClass("range-start");
    expect(endDate).toHaveClass("range-end");
  });
});
