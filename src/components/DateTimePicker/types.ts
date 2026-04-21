import { Locale } from "date-fns";
import type { ReactNode } from "react";
import { DateNoteType } from "../../types/dates";

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
  value?: Date | [Date, Date] | null;
  onChange: (date: Date | [Date, Date] | null) => void;
  clearable?: boolean;
  placeholder?: string;
  onClear?: () => void;
  mode?: "single" | "range" | "week";
  showTime?: boolean;
  use24Hour?: boolean;
  disabled?: boolean;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  styles?: StyleProps;
  locale?: Locale;
  notes?: DateNoteType[];
  onDateHover?: (date: Date | null) => void;
  showTooltip?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  footer?: ReactNode;
  className?: string;
  darkMode?: boolean;
}
