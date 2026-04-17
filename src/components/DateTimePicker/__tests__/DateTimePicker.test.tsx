import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { DateTimePicker } from "../DateTimePicker";
import { enUS, ja } from "date-fns/locale";
import { startOfWeek, endOfWeek } from "date-fns";
import { format } from "date-fns";

describe("DateTimePicker", () => {
  const defaultProps = {
    value: new Date("2024-03-15T12:00:00"),
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders with default props", () => {
    render(<DateTimePicker {...defaultProps} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens calendar on trigger click", async () => {
    render(<DateTimePicker {...defaultProps} />);
    const trigger = screen.getByRole("button");
    await userEvent.click(trigger);
    expect(screen.getByText("March")).toBeInTheDocument();
  });

  it("supports different locales", () => {
    const { rerender } = render(
      <DateTimePicker {...defaultProps} locale={enUS} />,
    );
    const enText = format(defaultProps.value, "PP p", { locale: enUS });
    expect(screen.getByRole("button")).toHaveTextContent(enText);

    rerender(<DateTimePicker {...defaultProps} locale={ja} />);
    const jaText = format(defaultProps.value, "PP p", { locale: ja });
    expect(screen.getByRole("button")).toHaveTextContent(jaText);
  });

  it("handles date selection", async () => {
    render(<DateTimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByText("20"));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("supports 24-hour time format", () => {
    render(<DateTimePicker {...defaultProps} use24Hour />);
    expect(screen.getByText(/12:00/)).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<DateTimePicker {...defaultProps} disabled />);
    const trigger = screen.getByRole("button");
    expect(trigger).toBeDisabled();
  });

  it("supports range selection mode", async () => {
    const rangeValue: [Date, Date] = [
      new Date("2024-03-15"),
      new Date("2024-03-20"),
    ];
    render(
      <DateTimePicker
        value={rangeValue}
        onChange={defaultProps.onChange}
        mode="range"
      />,
    );
    const startText = format(rangeValue[0], "PP");
    const endText = format(rangeValue[1], "PP");
    expect(screen.getByRole("button")).toHaveTextContent(
      `${startText} - ${endText}`,
    );
  });

  it("supports week range selection mode", async () => {
    const date = new Date("2024-03-15");
    const weekRange: [Date, Date] = [startOfWeek(date), endOfWeek(date)];

    render(
      <DateTimePicker
        value={weekRange}
        onChange={defaultProps.onChange}
        mode="week"
      />,
    );

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByText("15"));

    expect(defaultProps.onChange).toHaveBeenCalledWith([
      expect.any(Date),
      expect.any(Date),
    ]);
  });

  it("handles week range hover state", async () => {
    const date = new Date("2024-03-15");
    const weekRange: [Date, Date] = [startOfWeek(date), endOfWeek(date)];

    render(
      <DateTimePicker
        value={weekRange}
        onChange={defaultProps.onChange}
        mode="week"
      />,
    );

    await userEvent.click(screen.getByRole("button"));
    const dayElement = screen.getByText("15");
    fireEvent.mouseEnter(dayElement);

    const weekDays = dayElement.closest(".calendar-days");
    expect(weekDays?.querySelector(".in-range")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const customStyles = {
      containerClassName: "custom-container",
      triggerClassName: "custom-trigger",
    };
    render(<DateTimePicker {...defaultProps} styles={customStyles} />);
    expect(screen.getByRole("button")).toHaveClass("custom-trigger");
  });

  it("applies dark mode", () => {
    render(<DateTimePicker {...defaultProps} darkMode={true} />);
    const container = screen.getByRole("button").closest(".date-time-picker");
    expect(container).toHaveClass("dark-mode");
  });

  it("shows footer when provided", async () => {
    const footer = <div data-testid="custom-footer">Custom Footer</div>;
    render(<DateTimePicker {...defaultProps} footer={footer} />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("custom-footer")).toBeInTheDocument();
  });

  it("handles date notes", async () => {
    const notes = [
      {
        date: new Date("2024-03-15"),
        note: "Test note",
      },
    ];
    render(<DateTimePicker {...defaultProps} notes={notes} />);
    await userEvent.click(screen.getByRole("button"));
    const indicatorEl = document.querySelector(
      ".note-indicator",
    ) as HTMLElement | null;
    expect(indicatorEl).toBeInTheDocument();
    const buttonWithNote = indicatorEl?.closest("button") as HTMLElement | null;
    if (buttonWithNote) {
      fireEvent.mouseEnter(buttonWithNote);
      expect(screen.getByText("Test note")).toBeInTheDocument();
    }
  });

  describe("minDate and maxDate", () => {
    it("disables dates before minDate", async () => {
      render(
        <DateTimePicker {...defaultProps} minDate={new Date("2024-03-10")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      const day5 = screen.getByText("5");
      expect(day5).toBeDisabled();
      expect(day5).toHaveClass("disabled");
    });

    it("disables dates after maxDate", async () => {
      render(
        <DateTimePicker {...defaultProps} maxDate={new Date("2024-03-20")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      const day25 = screen.getByText("25");
      expect(day25).toBeDisabled();
      expect(day25).toHaveClass("disabled");
    });

    it("does not call onChange when clicking a date before minDate", async () => {
      render(
        <DateTimePicker {...defaultProps} minDate={new Date("2024-03-10")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      await userEvent.click(screen.getByText("5"));
      expect(defaultProps.onChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when clicking a date after maxDate", async () => {
      render(
        <DateTimePicker {...defaultProps} maxDate={new Date("2024-03-20")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      await userEvent.click(screen.getByText("25"));
      expect(defaultProps.onChange).not.toHaveBeenCalled();
    });

    it("allows selecting dates within minDate and maxDate range", async () => {
      render(
        <DateTimePicker
          {...defaultProps}
          minDate={new Date("2024-03-10")}
          maxDate={new Date("2024-03-20")}
        />,
      );
      await userEvent.click(screen.getByRole("button"));
      await userEvent.click(screen.getByText("15"));
      expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it("allows selecting the minDate itself", async () => {
      render(
        <DateTimePicker {...defaultProps} minDate={new Date("2024-03-10")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      await userEvent.click(screen.getByText("10"));
      expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it("allows selecting the maxDate itself", async () => {
      render(
        <DateTimePicker {...defaultProps} maxDate={new Date("2024-03-20")} />,
      );
      await userEvent.click(screen.getByRole("button"));
      await userEvent.click(screen.getByText("15"));
      expect(defaultProps.onChange).toHaveBeenCalled();
    });
  });
});
