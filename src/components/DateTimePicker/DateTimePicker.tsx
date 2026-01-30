import React, { useState, useRef } from "react";
import {
  format,
  addMonths,
  subMonths,
  setMonth,
  setYear,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { Popover } from "./Popover";
import { Calendar } from "./Calendar";
import { TimePicker } from "./TimePicker";
import { DateNote } from "./DateNote";
import { useA11y } from "../../hooks/useA11y";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { DateTimePickerProps } from "./types";
import "./DateTimePicker.scss";

const defaultStyles = {
  containerClassName: "",
  triggerClassName: "",
  calendarClassName: "",
  dayClassName: "",
  selectedDayClassName: "",
  rangeClassName: "",
  timePickerClassName: "",
};

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value = new Date(),
  onChange,
  mode = "single",
  showTime = true,
  use24Hour = false,
  disabled = false,
  disabledDates = [],
  locale,
  styles = defaultStyles,
  notes = [],
  onDateHover,
  isOpen: controlledIsOpen,
  onOpenChange,
  footer,
  className = "",
  darkMode = false,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;

  const [currentDate, setCurrentDate] = useState(
    mode === "single" ? (value as Date) : (value as [Date, Date])[0],
  );
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >(
    mode === "range" || mode === "week"
      ? Array.isArray(value)
        ? [value[0], value[1]]
        : [null, null]
      : [null, null],
  );
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const a11yProps = useA11y(
    isOpen,
    () => setIsOpen(false),
    triggerRef,
    contentRef,
  );

  const handleDateHover = (date: Date | null) => {
    setHoverDate(date);
    if (onDateHover) onDateHover(date);
  };

  const handleDateClick = (date: Date) => {
    if (mode === "single") {
      const newDate = new Date(date);
      if (value instanceof Date) {
        newDate.setHours(value.getHours(), value.getMinutes());
      }
      onChange(newDate);
      if (!showTime && !footer) setIsOpen(false);
    } else if (mode === "week") {
      const weekStart = startOfWeek(date);
      const weekEnd = endOfWeek(date);
      setSelectedRange([weekStart, weekEnd]);
      onChange([weekStart, weekEnd]);
      if (!footer) setIsOpen(false);
    } else {
      if (!selectedRange[0] || (selectedRange[0] && selectedRange[1])) {
        setSelectedRange([date, null]);
        setHoverDate(null);
      } else {
        const start = selectedRange[0];
        if (start) {
          const finalRange: [Date, Date] =
            start > date ? [date, start] : [start, date];
          setSelectedRange([finalRange[0], finalRange[1]]);
          onChange(finalRange);
          setHoverDate(null);
          if (!footer) setIsOpen(false);
        }
      }
    }
  };

  const handleKeyDown = useKeyboardNavigation(
    currentDate,
    handleDateClick,
    setCurrentDate,
  );

  const handleTimeChange = (newDate: Date) => {
    if (mode === "single") {
      onChange(newDate);
    }
  };

  const formatDate = (date: Date, formatStr: string) => {
    try {
      return format(date, formatStr, { locale });
    } catch (error) {
      console.error("Date formatting error: ", error);
      return format(date, formatStr);
    }
  };

  const formatTriggerValue = () => {
    if (mode === "single" && value instanceof Date) {
      return formatDate(value, showTime ? (use24Hour ? "PPpp" : "PP p") : "PP");
    } else if ((mode === "range" || mode === "week") && Array.isArray(value)) {
      return `${formatDate(value[0], "PP")} - ${formatDate(value[1], "PP")}`;
    }
    return "Select date";
  };

  return (
    <div
      className={`date-time-picker ${darkMode ? "dark-mode" : ""} ${
        styles?.containerClassName || ""
      } ${className}`}
      onKeyDown={handleKeyDown}
    >
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <div
            ref={contentRef}
            className={`calendar-container ${darkMode ? "dark-mode" : ""} ${
              styles?.calendarClassName || ""
            }`}
            {...a11yProps}
          >
            <Calendar
              currentDate={currentDate}
              selectedDate={mode === "single" ? (value as Date) : undefined}
              selectedRange={
                mode === "range" || mode === "week" ? selectedRange : undefined
              }
              hoverDate={hoverDate}
              mode={mode}
              disabledDates={disabledDates}
              onDateClick={handleDateClick}
              onDateHover={handleDateHover}
              onPrevMonth={() => setCurrentDate(subMonths(currentDate, 1))}
              onNextMonth={() => setCurrentDate(addMonths(currentDate, 1))}
              onMonthSelect={(month) =>
                setCurrentDate(setMonth(currentDate, month))
              }
              onYearSelect={(year) =>
                setCurrentDate(setYear(currentDate, year))
              }
              locale={locale}
              notes={notes}
              styles={styles}
              darkMode={darkMode}
            />
            {showTime && mode === "single" && value instanceof Date && (
              <TimePicker
                value={value}
                onChange={handleTimeChange}
                use24Hour={use24Hour}
                locale={locale}
                className={styles.timePickerClassName}
                darkMode={darkMode}
              />
            )}
            <DateNote
              notes={notes}
              hoveredDate={hoverDate}
              selectedDate={mode === "single" ? (value as Date) : undefined}
              selectedRange={
                mode === "range" || mode === "week"
                  ? (value as [Date, Date])
                  : undefined
              }
              darkMode={darkMode}
            />
            {footer}
          </div>
        }
      >
        <button
          ref={triggerRef}
          className={`date-picker-trigger ${darkMode ? "dark-mode" : ""} ${
            styles?.triggerClassName || ""
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Choose date and time"
        >
          {formatTriggerValue()}
        </button>
      </Popover>
    </div>
  );
};
