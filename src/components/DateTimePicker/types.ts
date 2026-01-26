import { Locale } from 'date-fns';
import { DateNoteType } from '../../types/dates';

export interface StyleProps {
  containerClassName?: string;
  triggerClassName?: string;
  calendarClassName?: string;
  timePickerClassName?: string;
  dayClassName?: string;
  selectedDayClassName?: string;
  rangeClassName?: string;
  disabledClassName?: string;
}

export interface DateTimePickerProps {
  value?: Date | [Date, Date];
  onChange: (date: Date | [Date, Date]) => void;
  mode?: 'single' | 'range' | 'week';
  showTime?: boolean;
  use24Hour?: boolean;
  disabled?: boolean;
  disabledDates?: Date[];
  styles?: StyleProps;
  locale?: Locale;
  notes?: DateNoteType[];
  onDateHover?: (date: Date | null) => void;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  footer?: React.ReactNode;
  className?: string;
  darkMode?: boolean;
}