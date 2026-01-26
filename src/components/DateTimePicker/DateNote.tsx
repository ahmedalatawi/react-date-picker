import React from "react";
import { DateNoteProps } from "../../types/dates";
import { findNoteForDate } from "../../utils/notes";

export const DateNote: React.FC<DateNoteProps> = ({
  notes,
  hoveredDate,
  selectedDate,
  selectedRange,
}) => {
  //show note for hovered date first, then selected date/range if no hover
  const dateToShow =
    hoveredDate || selectedDate || (selectedRange && selectedRange[0]);

  if (!dateToShow) return null;

  const note = findNoteForDate(dateToShow, notes);
  if (!note) return null;

  return (
    <div className="date-note">
      <div>{note}</div>
    </div>
  );
};
