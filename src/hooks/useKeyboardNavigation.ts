import { useCallback } from 'react';
import { addDays, addMonths, addYears } from 'date-fns';

export const useKeyboardNavigation = (
  currentDate: Date,
  onDateSelect: (date: Date) => void,
  onMonthChange: (date: Date) => void
) => {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onDateSelect(addDays(currentDate, -1));
          break;
        case 'ArrowRight':
          event.preventDefault();
          onDateSelect(addDays(currentDate, 1));
          break;
        case 'ArrowUp':
          event.preventDefault();
          onDateSelect(addDays(currentDate, -7));
          break;
        case 'ArrowDown':
          event.preventDefault();
          onDateSelect(addDays(currentDate, 7));
          break;
        case 'PageUp':
          event.preventDefault();
          if (event.shiftKey) {
            onMonthChange(addYears(currentDate, -1));
          } else {
            onMonthChange(addMonths(currentDate, -1));
          }
          break;
        case 'PageDown':
          event.preventDefault();
          if (event.shiftKey) {
            onMonthChange(addYears(currentDate, 1));
          } else {
            onMonthChange(addMonths(currentDate, 1));
          }
          break;
        case 'Home':
          event.preventDefault();
          onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));
          break;
        case 'End':
          event.preventDefault();
          onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0));
          break;
      }
    },
    [currentDate, onDateSelect, onMonthChange]
  );

  return handleKeyDown;
};