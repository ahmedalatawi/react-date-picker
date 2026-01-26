import { describe, it, expect } from 'vitest';
import { findNoteForDate, hasNote } from './notes';
import { DateNoteType } from '../types/dates';

describe('notes utils', () => {
  const sampleNotes: DateNoteType[] = [
    {
      date: new Date('2024-03-15'),
      note: 'Single date note',
    },
    {
      startDate: new Date('2024-03-20'),
      endDate: new Date('2024-03-22'),
      note: 'Date range note',
    },
  ];

  describe('findNoteForDate', () => {
    it('finds note for exact date match', () => {
      const result = findNoteForDate(new Date('2024-03-15'), sampleNotes);
      expect(result).toBe('Single date note');
    });

    it('finds note for date within range', () => {
      const result = findNoteForDate(new Date('2024-03-21'), sampleNotes);
      expect(result).toBe('Date range note');
    });

    it('returns null for date without note', () => {
      const result = findNoteForDate(new Date('2024-03-16'), sampleNotes);
      expect(result).toBeNull();
    });

    it('returns null for empty notes array', () => {
      const result = findNoteForDate(new Date('2024-03-15'), []);
      expect(result).toBeNull();
    });
  });

  describe('hasNote', () => {
    it('returns true when note exists', () => {
      const result = hasNote(new Date('2024-03-15'), sampleNotes);
      expect(result).toBe(true);
    });

    it('returns false when note does not exist', () => {
      const result = hasNote(new Date('2024-03-16'), sampleNotes);
      expect(result).toBe(false);
    });

    it('returns true for date within range', () => {
      const result = hasNote(new Date('2024-03-21'), sampleNotes);
      expect(result).toBe(true);
    });
  });
});