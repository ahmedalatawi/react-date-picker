import React, { useState } from "react";
import { TimePicker } from "../TimePicker/TimePicker";

export const TimePickerExample: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [use24Hour, setUse24Hour] = useState(false);

  const timePickerTheme = {
    containerClassName: "time-picker-standalone",
    triggerClassName: "time-picker-trigger-standalone",
    popoverClassName: "time-picker-popover-standalone",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <TimePicker
          value={date}
          onChange={setDate}
          use24Hour={use24Hour}
          styles={timePickerTheme}
        />
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={use24Hour}
            onChange={(e) => setUse24Hour(e.target.checked)}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "44px",
              height: "24px",
              background: use24Hour ? "#f97316" : "#e5e7eb",
              borderRadius: "12px",
              transition: "background-color 0.2s",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "2px",
                left: use24Hour ? "22px" : "2px",
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "50%",
                transition: "left 0.2s",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <span
            style={{
              marginLeft: "0.75rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#374151",
            }}
          >
            24-hour
          </span>
        </label>
      </div>
      <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
        Standalone time picker with 12/24-hour format toggle
      </div>
    </div>
  );
};
