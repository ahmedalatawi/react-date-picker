import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { addDays } from 'date-fns';

export const CleanRangeExample: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 5),
  ]);

  const cleanRangeTheme = {
    containerClassName: 'clean-range-picker',
    triggerClassName: 'clean-range-trigger',
    calendarClassName: 'clean-range-calendar',
    dayClassName: 'clean-range-day',
    selectedDayClassName: 'clean-range-selected',
    rangeClassName: 'clean-range-range',
    timePickerClassName: 'clean-range-time',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <DateTimePicker
        value={dateRange}
        onChange={(dates) => setDateRange(dates as [Date, Date])}
        mode="range"
        showTime={false}
        styles={cleanRangeTheme}
      />
      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Clean date range selection without tooltips
      </div>
    </div>
  );
};