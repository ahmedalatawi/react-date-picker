import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { generateDisabledDates, getBookedRanges } from '../../utils/dates';
import { addDays } from 'date-fns';

const bookedRanges = getBookedRanges();
const disabledDates = generateDisabledDates(bookedRanges);

export const HotelBookingExample: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 3),
  ]);

  const hotelTheme = {
    containerClassName: 'hotel-picker',
    triggerClassName: 'hotel-trigger',
    calendarClassName: 'hotel-calendar',
    dayClassName: 'hotel-day',
    selectedDayClassName: 'hotel-selected',
    rangeClassName: 'hotel-range',
    disabledClassName: 'hotel-disabled',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6' }} />
        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Available</span>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d1d5db' }} />
        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>Booked</span>
      </div>
      <DateTimePicker
        value={dateRange}
        onChange={(dates) => setDateRange(dates as [Date, Date])}
        mode="range"
        showTime={false}
        disabledDates={disabledDates}
        styles={hotelTheme}
      />
      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Note: Past dates and already booked periods are disabled
      </div>
    </div>
  );
};