import type { FC } from "react";
import { useState } from "react";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";

export const ClearableExample: FC = () => {
  const [date, setDate] = useState<Date | [Date, Date] | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <DateTimePicker
        value={date}
        onChange={(d) => setDate(d)}
        mode="single"
        showTime={false}
        clearable
        placeholder="Pick a date…"
      />
      <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
        {date instanceof Date
          ? `Selected: ${date.toLocaleDateString()}`
          : "No date selected"}
      </span>
    </div>
  );
};
