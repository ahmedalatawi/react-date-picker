import { useState } from "react";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";
import { addDays, subDays } from "date-fns";
import { enUS } from "date-fns/locale";

export const MinMaxExample = () => {
  const [date, setDate] = useState<Date>(new Date());
  const today = new Date();
  const minDate = subDays(today, 3);
  const maxDate = addDays(today, 30);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <DateTimePicker
        value={date}
        onChange={(d) => setDate(d as Date)}
        mode="single"
        showTime={false}
        locale={enUS}
        minDate={minDate}
        maxDate={maxDate}
      />
      <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
        Selectable: {minDate.toLocaleDateString()} – {maxDate.toLocaleDateString()}
      </span>
    </div>
  );
};
