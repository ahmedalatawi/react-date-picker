import { describe, it, expect } from 'vitest';
import {
  generateDisabledDates,
  isDateDisabled,
  getWeekRange,
  isDateInWeek,
  getWeekDays,
} from './dates';
import { startOfWeek, endOfWeek, addDays } from 'date-fns';

describe('dates utils', () => {
  describe('generateDisabledDates', () => {
    it('generates disabled dates including past dates', () => {
      const bookedRanges: [Date, Date][] = [];
      const result = generateDisabledDates(bookedRanges);
      expect(result).toHaveLength(3); // Default blocked days
    });

    it('includes booked ranges in disabled dates', () => {
      const today = new Date();
      const bookedRanges: [Date, Date][] = [
        [addDays(today, 5), addDays(today, 7)],
      ];
      const result = generateDisabledDates(bookedRanges);
      expect(result.length).toBeGreaterThan(3);
    });
  });

  describe('isDateDisabled', () => {
    it('returns true for disabled date', () => {
      const date = new Date();
      const disabledDates = [date];
      expect(isDateDisabled(date, disabledDates)).toBe(true);
    });

    it('returns false for enabled date', () => {
      const date = new Date();
      const disabledDates = [addDays(date, 1)];
      expect(isDateDisabled(date, disabledDates)).toBe(false);
    });
  });

  describe('getWeekRange', () => {
    it('returns correct week range', () => {
      const date = new Date('2024-03-15');
      const [start, end] = getWeekRange(date);
      expect(start).toEqual(startOfWeek(date));
      expect(end).toEqual(endOfWeek(date));
    });
  });

  describe('isDateInWeek', () => {
    it('returns true for date in same week', () => {
      const date = new Date('2024-03-15');
      const weekDate = new Date('2024-03-17');
      expect(isDateInWeek(date, weekDate)).toBe(true);
    });

    it('returns false for date in different week', () => {
      const date = new Date('2024-03-15');
      const weekDate = new Date('2024-03-24');
      expect(isDateInWeek(date, weekDate)).toBe(false);
    });
  });

  describe('getWeekDays', () => {
    it('returns array of 7 dates', () => {
      const date = new Date('2024-03-15');
      const weekDays = getWeekDays(date);
      expect(weekDays).toHaveLength(7);
    });

    it('returns dates from Sunday to Saturday', () => {
      const date = new Date('2024-03-15');
      const weekDays = getWeekDays(date);
      expect(weekDays[0]).toEqual(startOfWeek(date));
      expect(weekDays[6]).toEqual(endOfWeek(date));
    });
  });
});