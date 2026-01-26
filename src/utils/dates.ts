import { addDays, subDays, eachDayOfInterval, isSameDay, startOfWeek, endOfWeek, isSameWeek } from 'date-fns';

export const generateDisabledDates = (
  bookedRanges: [Date, Date][],
  blockedDays: number = 3
): Date[] => {
  const pastDates = Array.from({ length: blockedDays }, (_, i) =>
    subDays(new Date(), i)
  );

  const bookedDates = bookedRanges.flatMap(([start, end]) =>
    eachDayOfInterval({ start, end })
  );

  return [...pastDates, ...bookedDates];
};

export const isDateDisabled = (date: Date, disabledDates: Date[]): boolean => {
  return disabledDates.some((disabledDate) => isSameDay(date, disabledDate));
};

export const getBookedRanges = (): [Date, Date][] => {
  const today = new Date();
  return [
    [addDays(today, 5), addDays(today, 7)],
    [addDays(today, 12), addDays(today, 14)],
    [addDays(today, 20), addDays(today, 22)],
  ];
};

export const getWeekRange = (date: Date): [Date, Date] => {
  return [startOfWeek(date), endOfWeek(date)];
};

export const isDateInWeek = (date: Date, weekDate: Date): boolean => {
  return isSameWeek(date, weekDate);
};

export const getWeekDays = (date: Date): Date[] => {
  const [start, end] = getWeekRange(date);
  return eachDayOfInterval({ start, end });
};