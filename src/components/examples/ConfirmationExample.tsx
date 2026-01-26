import React, { useState } from 'react';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { ConfirmButton } from '../DateTimePicker/ConfirmButton';
import { addDays } from 'date-fns';

export const ConfirmationExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [confirmedDate, setConfirmedDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setConfirmedDate(selectedDate);
    setIsOpen(false);
  };

  const confirmationTheme = {
    containerClassName: 'confirmation-picker',
    triggerClassName: 'confirmation-trigger',
    calendarClassName: 'confirmation-calendar',
    dayClassName: 'confirmation-day',
    selectedDayClassName: 'confirmation-selected',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <DateTimePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date as Date)}
        mode="single"
        showTime
        styles={confirmationTheme}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        footer={
          <div style={{ 
            marginTop: '1rem', 
            paddingTop: '1rem', 
            borderTop: '1px solid #e5e7eb', 
            display: 'flex', 
            justifyContent: 'flex-end' 
          }}>
            <ConfirmButton onConfirm={handleConfirm} />
          </div>
        }
      />
      <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
        Confirmed date: {confirmedDate.toLocaleDateString()}
      </div>
      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Selection requires confirmation via OK button
      </div>
    </div>
  );
};