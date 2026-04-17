import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Calendar } from "../Calendar";
import { enUS, ja } from "date-fns/locale";

describe("Calendar", () => {
  const defaultProps = {
    currentDate: new Date(2024, 2, 15),
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
    const disabledDates = [new Date(2024, 2, 10)];
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
    const yearsContainer = document.querySelector(
      ".calendar-years",
    ) as HTMLElement | null;
    const years = yearsContainer
      ? Array.from(yearsContainer.querySelectorAll("button"))
      : [];
    expect(years).toHaveLength(12);
  });

  it("supports range selection mode", () => {
    const rangeProps = {
      ...defaultProps,
      mode: "range" as const,
      selectedRange: [new Date(2024, 2, 15), new Date(2024, 2, 20)] as [
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

  describe("minDate and maxDate", () => {
    it("disables dates before minDate", () => {
      render(<Calendar {...defaultProps} minDate={new Date(2024, 2, 10)} />);
      const day5 = screen.getByText("5");
      expect(day5).toBeDisabled();
      expect(day5).toHaveClass("disabled");
    });

    it("disables dates after maxDate", () => {
      render(<Calendar {...defaultProps} maxDate={new Date(2024, 2, 20)} />);
      const day25 = screen.getByText("25");
      expect(day25).toBeDisabled();
      expect(day25).toHaveClass("disabled");
    });

    it("keeps dates within bounds enabled", () => {
      render(
        <Calendar
          {...defaultProps}
          minDate={new Date(2024, 2, 10)}
          maxDate={new Date(2024, 2, 20)}
        />,
      );
      const day15 = screen.getByText("15");
      expect(day15).not.toBeDisabled();
      expect(day15).not.toHaveClass("disabled");
    });

    it("allows boundary dates (minDate and maxDate are selectable)", () => {
      render(
        <Calendar
          {...defaultProps}
          minDate={new Date(2024, 2, 10)}
          maxDate={new Date(2024, 2, 20)}
        />,
      );
      expect(screen.getByText("10")).not.toBeDisabled();
      expect(screen.getByText("20")).not.toBeDisabled();
    });

    it("disables months out of range in month view", async () => {
      render(
        <Calendar
          {...defaultProps}
          minDate={new Date(2024, 2, 1)}
          maxDate={new Date(2024, 4, 31)}
        />,
      );
      await userEvent.click(screen.getByText("March"));
      // January should be disabled (before March)
      expect(screen.getByText("Jan")).toBeDisabled();
      // April should be enabled (within range)
      expect(screen.getByText("Apr")).not.toBeDisabled();
    });

    it("disables next month nav when at maxDate month", () => {
      render(<Calendar {...defaultProps} maxDate={new Date(2024, 2, 31)} />);
      expect(screen.getByLabelText("Next month")).toBeDisabled();
    });

    it("disables previous month nav when at minDate month", () => {
      render(<Calendar {...defaultProps} minDate={new Date(2024, 2, 1)} />);
      expect(screen.getByLabelText("Previous month")).toBeDisabled();
    });
  });
});
