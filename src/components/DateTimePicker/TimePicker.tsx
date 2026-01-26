import React, { useState } from "react";
import { format, Locale, setHours, setMinutes } from "date-fns";
import { ClockIcon } from "../icons";

interface TimePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  use24Hour?: boolean;
  locale?: Locale;
  className?: string;
  darkMode?: boolean;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  use24Hour = false,
  locale,
  className = "",
  darkMode = false,
}) => {
  const [isSelectingHour, setIsSelectingHour] = useState(true);
  const [showPicker, setShowPicker] = useState(false);

  const hours = use24Hour
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  const period = value.getHours() >= 12 ? "PM" : "AM";

  const formatTime = (date: Date, formatStr: string) => {
    try {
      return format(date, formatStr, { locale });
    } catch (error) {
      return format(date, formatStr);
    }
  };

  const handleHourClick = (hour: number) => {
    const newHour = !use24Hour && period === "PM" ? (hour % 12) + 12 : hour;
    const newDate = setHours(value, newHour);
    onChange(newDate);
    setIsSelectingHour(false);
  };

  const handleMinuteClick = (minute: number) => {
    const newDate = setMinutes(value, minute);
    onChange(newDate);
    setShowPicker(false);
  };

  const togglePeriod = () => {
    const currentHour = value.getHours();
    const newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
    const newDate = setHours(value, newHour);
    onChange(newDate);
  };

  const formatTimeDisplay = () => {
    return formatTime(value, use24Hour ? "HH:mm" : "hh:mm a");
  };

  return (
    <div
      className={`time-picker-container ${
        darkMode ? "dark-mode" : ""
      } ${className}`}
    >
      <div className="time-picker-input">
        <ClockIcon size={16} />
        <button
          type="button"
          className="time-display"
          onClick={() => setShowPicker(!showPicker)}
        >
          {formatTimeDisplay()}
        </button>
      </div>

      {showPicker && (
        <div className={`time-picker-dropdown ${darkMode ? "dark-mode" : ""}`}>
          <div className="time-picker-header">
            <button
              type="button"
              className={`time-segment ${isSelectingHour ? "active" : ""}`}
              onClick={() => setIsSelectingHour(true)}
            >
              {formatTime(value, use24Hour ? "HH" : "hh")}
            </button>
            <span>:</span>
            <button
              type="button"
              className={`time-segment ${!isSelectingHour ? "active" : ""}`}
              onClick={() => setIsSelectingHour(false)}
            >
              {formatTime(value, "mm")}
            </button>
            {!use24Hour && (
              <button
                type="button"
                className="period-toggle"
                onClick={togglePeriod}
              >
                {period}
              </button>
            )}
          </div>

          <div className="time-picker-body">
            <div className="time-numbers">
              {(isSelectingHour ? hours : minutes).map((num) => (
                <button
                  key={num}
                  type="button"
                  className={`time-number ${
                    (isSelectingHour && value.getHours() === num) ||
                    (!isSelectingHour && value.getMinutes() === num)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    isSelectingHour
                      ? handleHourClick(num)
                      : handleMinuteClick(num)
                  }
                >
                  {num.toString().padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
