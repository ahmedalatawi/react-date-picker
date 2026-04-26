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
  /**
   * Controls whether the popover auto-closes after a selection.
   * - `"auto"` (default): closes after date pick when `showTime` is off; when `showTime` is on,
   *   closes after the minute is picked. In range/week mode, closes once the range is complete.
   *   A `footer` always overrides auto-close.
   * - `true`: closes immediately after date selection, even when `showTime` is on.
   * - `false`: never auto-closes; user must click outside or use a footer action.
   */
  closeOnSelect?: boolean | "auto";
}
