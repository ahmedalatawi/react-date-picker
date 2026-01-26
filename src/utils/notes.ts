import { isSameDay, isWithinInterval } from 'date-fns';
import { DateNoteType } from '../types/dates';

export const findNoteForDate = (date: Date, notes: DateNoteType[]): string | null => {
  for (const noteItem of notes) {
    if ('date' in noteItem && isSameDay(noteItem.date, date)) {
      return noteItem.note;
    }
    if ('startDate' in noteItem && 'endDate' in noteItem) {
      if (isWithinInterval(date, { start: noteItem.startDate, end: noteItem.endDate })) {
        return noteItem.note;
      }
    }
  }
  return null;
};

export const hasNote = (date: Date, notes: DateNoteType[]): boolean => {
  return findNoteForDate(date, notes) !== null;
};