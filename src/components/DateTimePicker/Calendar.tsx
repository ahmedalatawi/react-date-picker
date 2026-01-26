import React, { useState } from "react";
import {
  format,
  isWithinInterval,
  startOfDay,
  endOfDay,
  isSameDay,
  differenceInDays,
  Locale,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { DateNoteType } from "../../types/dates";
import { hasNote } from "../../utils/notes";
import { isDateInWeek, getWeekRange } from "../../utils/dates";
import { StyleProps } from "./types";
import { Tooltip } from "./Tooltip";

interface CalendarProps {
  currentDate: Date;
  selectedDate?: Date;
  selectedRange?: [Date | null, Date | null];
  hoverDate?: Date | null;
  mode: "single" | "range" | "week";
  disabledDates: Date[];
  locale?: Locale;
  onDateClick: (date: Date) => void;
  onDateHover?: (date: Date | null) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onMonthSelect: (month: number) => void;
  onYearSelect: (year: number) => void;
  styles?: StyleProps;
  notes?: DateNoteType[];
  darkMode?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  selectedRange = [null, null],
  hoverDate,
  mode,
  disabledDates,
  locale,
  onDateClick,
  onDateHover,
  onPrevMonth,
  onNextMonth,
  onMonthSelect,
  onYearSelect,
  styles = {},
  notes = [],
  darkMode = false,
}) => {
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");
  const [hoveredEndDate, setHoveredEndDate] = useState<Date | null>(null);
  const years = Array.from(
    { length: 12 },
    (_, i) => currentDate.getFullYear() - 5 + i,
  );
  const months = Array.from({ length: 12 }, (_, i) => i);

  const formatDate = (date: Date, formatStr: string) => {
    try {
      return format(date, formatStr, { locale });
    } catch (error) {
      return format(date, formatStr);
    }
  };

  const isDateDisabled = (date: Date) => {
    return disabledDates.some((disabledDate) => isSameDay(date, disabledDate));
  };

  const isDateInRange = (date: Date) => {
    if (mode === "week" && hoverDate) {
      const [weekStart, weekEnd] = getWeekRange(hoverDate);
      return isWithinInterval(date, {
        start: startOfDay(weekStart),
        end: endOfDay(weekEnd),
      });
    }

    if (mode !== "range" || !selectedRange[0]) return false;
    const end = selectedRange[1] || hoverDate;
    if (!end) return false;

    const start = selectedRange[0];
    const rangeEnd = end;

    return isWithinInterval(date, {
      start: startOfDay(start < rangeEnd ? start : rangeEnd),
      end: endOfDay(start < rangeEnd ? rangeEnd : start),
    });
  };

  const getNightsCount = (start: Date, end: Date) => {
    return Math.abs(differenceInDays(start, end));
  };

  const getTooltipText = () => {
    if (!selectedRange[0]) return "";
    const endDate = selectedRange[1] || hoverDate;
    if (!endDate) return "";
    const nights = getNightsCount(selectedRange[0], endDate);
    return `${nights} night${nights !== 1 ? "s" : ""}`;
  };

  const handleDateHover = (date: Date) => {
    if (onDateHover) {
      onDateHover(date);
    }
    if (
      mode === "range" &&
      selectedRange[1] &&
      isSameDay(date, selectedRange[1])
    ) {
      setHoveredEndDate(date);
    } else {
      setHoveredEndDate(null);
    }
  };

  const handleDateLeave = () => {
    if (onDateHover) {
      onDateHover(null);
    }
    setHoveredEndDate(null);
  };

  const getDayClasses = (
    isSelected: boolean,
    inRange: boolean,
    isRangeStart: boolean,
    isRangeEnd: boolean,
    isDisabled: boolean,
  ) => {
    let classes = `calendar-day ${styles.dayClassName || ""}`;
    if (darkMode) classes += " dark-mode";
    if (isSelected) classes += ` selected ${styles.selectedDayClassName || ""}`;
    if (inRange && mode !== "single")
      classes += ` in-range ${styles.rangeClassName || ""}`;
    if (isRangeStart && mode !== "single") classes += " range-start";
    if (isRangeEnd && mode !== "single") classes += " range-end";
    if (isDisabled) classes += ` disabled ${styles.disabledClassName || ""}`;
    return classes;
  };

  const renderDays = () => {
    const days = [];
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    // get weekday names based on locale
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(2024, 0, i + 1); // using a Sunday as reference
      return formatDate(date, "EEE");
    });

    // add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
    }

    // add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      const isDisabled = isDateDisabled(date);
      const isSelected =
        mode === "single" && selectedDate
          ? isSameDay(date, selectedDate)
          : false;
      const inRange = isDateInRange(date);
      const isRangeStart =
        selectedRange[0] && isSameDay(date, selectedRange[0]);
      const isRangeEnd =
        (selectedRange[1] && isSameDay(date, selectedRange[1])) ||
        (hoverDate && isSameDay(date, hoverDate));
      const tooltipText = getTooltipText();
      const shouldShowTooltip =
        mode === "range" &&
        ((selectedRange[0] && !selectedRange[1] && hoverDate && isRangeEnd) ||
          (selectedRange[1] &&
            hoveredEndDate &&
            isSameDay(date, hoveredEndDate)));
      const hasNoteIndicator = hasNote(date, notes);
      const isInHoveredWeek =
        mode === "week" && hoverDate && isDateInWeek(date, hoverDate);

      const dayElement = (
        <div key={day} className="calendar-day-container">
          <button
            type="button"
            onClick={() => !isDisabled && onDateClick(date)}
            onMouseEnter={() => handleDateHover(date)}
            onMouseLeave={handleDateLeave}
            className={getDayClasses(
              isSelected,
              !!(inRange || isInHoveredWeek),
              !!isRangeStart,
              !!isRangeEnd,
              isDisabled,
            )}
            disabled={isDisabled}
          >
            {day}
            {hasNoteIndicator && <span className="note-indicator" />}
          </button>
          {shouldShowTooltip && tooltipText && (
            // <div className="tooltip">
            //   {tooltipText}
            //   <div className="tooltip-arrow" />
            // </div>
            <Tooltip content={tooltipText} />
          )}
        </div>
      );

      days.push(dayElement);
    }

    return (
      <>
        <div className="calendar-weekdays">
          {weekDays.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days">{days}</div>
      </>
    );
  };

  const renderMonths = () => (
    <div className="calendar-months">
      {months.map((month) => {
        const date = new Date(2024, month);
        return (
          <button
            key={month}
            type="button"
            className={`calendar-month ${
              month === currentDate.getMonth() ? "selected" : ""
            }`}
            onClick={() => {
              onMonthSelect(month);
              setViewMode("days");
            }}
          >
            {formatDate(date, "MMM")}
          </button>
        );
      })}
    </div>
  );

  const renderYears = () => (
    <div className="calendar-years">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          className={`calendar-year ${
            year === currentDate.getFullYear() ? "selected" : ""
          }`}
          onClick={() => {
            onYearSelect(year);
            setViewMode("months");
          }}
        >
          {year}
        </button>
      ))}
    </div>
  );

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          className="calendar-nav-button"
          onClick={onPrevMonth}
          type="button"
          aria-label="Previous month"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <div className="calendar-title-group">
          <button
            type="button"
            className="calendar-title-button"
            onClick={() => setViewMode("months")}
          >
            {formatDate(currentDate, "MMMM")}
          </button>
          <button
            type="button"
            className="calendar-title-button"
            onClick={() => setViewMode("years")}
          >
            {formatDate(currentDate, "yyyy")}
          </button>
        </div>
        <button
          className="calendar-nav-button"
          onClick={onNextMonth}
          type="button"
          aria-label="Next month"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>

      {viewMode === "days" && renderDays()}
      {viewMode === "months" && renderMonths()}
      {viewMode === "years" && renderYears()}
    </div>
  );
};
