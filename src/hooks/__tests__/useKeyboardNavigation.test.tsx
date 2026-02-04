import React from "react";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useKeyboardNavigation } from "../useKeyboardNavigation";
import { addDays, addMonths, addYears } from "date-fns";

describe("useKeyboardNavigation", () => {
  const mockOnDateSelect = vi.fn();
  const mockOnMonthChange = vi.fn();
  const currentDate = new Date("2024-03-15");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("handles arrow key navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const leftArrowEvent = {
      key: "ArrowLeft",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(leftArrowEvent);

    expect(leftArrowEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(addDays(currentDate, -1));
  });

  it("handles ArrowRight key navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const rightArrowEvent = {
      key: "ArrowRight",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(rightArrowEvent);

    expect(rightArrowEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(addDays(currentDate, 1));
  });

  it("handles ArrowUp key navigation by -7 days", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const upArrowEvent = {
      key: "ArrowUp",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(upArrowEvent);

    expect(upArrowEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(addDays(currentDate, -7));
  });

  it("handles ArrowDown key navigation by +7 days", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const downArrowEvent = {
      key: "ArrowDown",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(downArrowEvent);

    expect(downArrowEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(addDays(currentDate, 7));
  });

  it("handles page up/down for month navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const pageUpEvent = {
      key: "PageUp",
      preventDefault: vi.fn(),
      shiftKey: false,
    } as unknown as React.KeyboardEvent;

    result.current(pageUpEvent);

    expect(pageUpEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnMonthChange).toHaveBeenCalledWith(addMonths(currentDate, -1));
  });

  it("handles shift + page up/down for year navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const shiftPageUpEvent = {
      key: "PageUp",
      preventDefault: vi.fn(),
      shiftKey: true,
    } as unknown as React.KeyboardEvent;

    result.current(shiftPageUpEvent);

    expect(shiftPageUpEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnMonthChange).toHaveBeenCalledWith(addYears(currentDate, -1));
  });

  it("handles page down for next month navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const pageDownEvent = {
      key: "PageDown",
      preventDefault: vi.fn(),
      shiftKey: false,
    } as unknown as React.KeyboardEvent;

    result.current(pageDownEvent);

    expect(pageDownEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnMonthChange).toHaveBeenCalledWith(addMonths(currentDate, 1));
  });

  it("handles shift + page down for next year navigation", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const shiftPageDownEvent = {
      key: "PageDown",
      preventDefault: vi.fn(),
      shiftKey: true,
    } as unknown as React.KeyboardEvent;

    result.current(shiftPageDownEvent);

    expect(shiftPageDownEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnMonthChange).toHaveBeenCalledWith(addYears(currentDate, 1));
  });

  it("handles home key for first day of month", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const homeEvent = {
      key: "Home",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(homeEvent);

    expect(homeEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    );
  });

  it("handles end key for last day of month", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const endEvent = {
      key: "End",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(endEvent);

    expect(endEvent.preventDefault).toHaveBeenCalled();
    expect(mockOnDateSelect).toHaveBeenCalledWith(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
    );
  });

  it("ignores unhandled keys without side effects", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation(currentDate, mockOnDateSelect, mockOnMonthChange),
    );

    const escapeEvent = {
      key: "Escape",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent;

    result.current(escapeEvent);

    expect(escapeEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockOnDateSelect).not.toHaveBeenCalled();
    expect(mockOnMonthChange).not.toHaveBeenCalled();
  });
});
