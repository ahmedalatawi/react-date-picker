import React, { useState } from "react";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";
import { addDays } from "date-fns";
import { DateNoteType } from "../../types/dates";

const sampleRangeNotes: DateNoteType[] = [
  {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 3),
    note: "Team offsite in San Francisco",
  },
  {
    startDate: addDays(new Date(), 7),
    endDate: addDays(new Date(), 10),
    note: "Product launch week",
  },
];

export const RangeNotesExample: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    addDays(new Date(), 1),
    addDays(new Date(), 3),
  ]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const rangeNotesTheme = {
    containerClassName: "range-notes-picker",
    triggerClassName: "range-notes-trigger",
    calendarClassName: "range-notes-calendar",
    dayClassName: "range-notes-day",
    selectedDayClassName: "range-notes-selected",
    rangeClassName: "range-notes-range",
    timePickerClassName: "range-notes-time",
  };

  console.log("Hovered Date:", hoveredDate);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <DateTimePicker
        value={dateRange}
        onChange={(dates) => setDateRange(dates as [Date, Date])}
        mode="range"
        showTime={false}
        styles={rangeNotesTheme}
        notes={sampleRangeNotes}
        onDateHover={setHoveredDate}
      />
      <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
        Select or hover over date ranges with indicators to see notes
      </div>
    </div>
  );
};
