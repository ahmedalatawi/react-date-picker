export interface DateNote {
  date: Date;
  note: string;
}

export interface DateRangeNote {
  startDate: Date;
  endDate: Date;
  note: string;
}

export type DateNoteType = DateNote | DateRangeNote;

export interface DateNoteProps {
  notes: DateNoteType[];
  hoveredDate?: Date | null;
  selectedDate?: Date;
  selectedRange?: [Date | null, Date | null];
  darkMode?: boolean;
}