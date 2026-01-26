import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';

export const MaterialExample: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const materialTheme = {
    containerClassName: 'material-picker',
    triggerClassName: 'material-trigger',
    calendarClassName: 'material-calendar',
    dayClassName: 'material-day',
    selectedDayClassName: 'material-selected',
    timePickerClassName: 'material-time',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <DateTimePicker
        value={date}
        onChange={(newDate) => setDate(newDate as Date)}
        mode="single"
        showTime
        styles={materialTheme}
      />
      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Material Design 3 inspired theme with ripple effects, elevation states, and smooth hover animations
      </div>
    </div>
  );
};