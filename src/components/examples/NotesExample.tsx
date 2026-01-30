import React, { useState } from "react";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";
import { addDays } from "date-fns";
import { DateNoteType } from "../../types/dates";

const sampleNotes: DateNoteType[] = [
  {
    date: new Date(),
    note: "Today's special event: Team meeting at 2 PM",
  },
  {
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 5),
    note: "Annual conference in New York",
  },
  {
    date: addDays(new Date(), 7),
    note: "Deadline for Q2 reports",
  },
];

export const NotesExample: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const notesTheme = {
    containerClassName: "notes-picker",
    triggerClassName: "notes-trigger",
    calendarClassName: "notes-calendar",
    dayClassName: "notes-day",
    selectedDayClassName: "notes-selected",
    timePickerClassName: "notes-time",
  };

  console.log("Hovered Date:", hoveredDate);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <DateTimePicker
        value={date}
        onChange={(newDate) => setDate(newDate as Date)}
        mode="single"
        showTime={false}
        styles={notesTheme}
        notes={sampleNotes}
        onDateHover={setHoveredDate}
        // darkMode
      />
      <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
        Hover over dates with a dot indicator to see notes
      </div>
    </div>
  );
};
