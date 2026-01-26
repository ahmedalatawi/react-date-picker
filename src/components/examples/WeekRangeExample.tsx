import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { startOfWeek, endOfWeek } from 'date-fns';

export const WeekRangeExample: React.FC = () => {
  const [weekRange, setWeekRange] = useState<[Date, Date]>([
    startOfWeek(new Date()),
    endOfWeek(new Date())
  ]);

  const weekRangeTheme = {
    containerClassName: 'week-range-picker',
    triggerClassName: 'week-range-trigger',
    calendarClassName: 'week-range-calendar',
    dayClassName: 'week-range-day',
    selectedDayClassName: 'week-range-selected',
    rangeClassName: 'week-range-range',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <DateTimePicker
        value={weekRange}
        onChange={(dates) => setWeekRange(dates as [Date, Date])}
        mode="week"
        showTime={false}
        styles={weekRangeTheme}
      />
      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Click on any day to select the entire week
      </div>
    </div>
  );
};