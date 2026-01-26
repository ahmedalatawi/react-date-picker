import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DateTimePicker } from '../DateTimePicker';
import { enUS, ja } from 'date-fns/locale';
import { startOfWeek, endOfWeek } from 'date-fns';

describe('DateTimePicker', () => {
  const defaultProps = {
    value: new Date('2024-03-15T12:00:00'),
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<DateTimePicker {...defaultProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens calendar on trigger click', async () => {
    render(<DateTimePicker {...defaultProps} />);
    const trigger = screen.getByRole('button');
    await userEvent.click(trigger);
    expect(screen.getByText('March')).toBeInTheDocument();
  });

  it('supports different locales', () => {
    const { rerender } = render(<DateTimePicker {...defaultProps} locale={enUS} />);
    expect(screen.getByText(/March 15, 2024/)).toBeInTheDocument();

    rerender(<DateTimePicker {...defaultProps} locale={ja} />);
    expect(screen.getByText(/2024年3月15日/)).toBeInTheDocument();
  });

  it('handles date selection', async () => {
    render(<DateTimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('20'));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('supports 24-hour time format', () => {
    render(<DateTimePicker {...defaultProps} use24Hour />);
    expect(screen.getByText(/12:00/)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<DateTimePicker {...defaultProps} disabled />);
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('supports range selection mode', async () => {
    const rangeValue: [Date, Date] = [
      new Date('2024-03-15'),
      new Date('2024-03-20'),
    ];
    render(
      <DateTimePicker
        value={rangeValue}
        onChange={defaultProps.onChange}
        mode="range"
      />
    );
    
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/March 15/)).toBeInTheDocument();
    expect(screen.getByText(/March 20/)).toBeInTheDocument();
  });

  it('supports week range selection mode', async () => {
    const date = new Date('2024-03-15');
    const weekRange: [Date, Date] = [startOfWeek(date), endOfWeek(date)];
    
    render(
      <DateTimePicker
        value={weekRange}
        onChange={defaultProps.onChange}
        mode="week"
      />
    );

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('15'));
    
    expect(defaultProps.onChange).toHaveBeenCalledWith([
      expect.any(Date),
      expect.any(Date),
    ]);
  });

  it('handles week range hover state', async () => {
    const date = new Date('2024-03-15');
    const weekRange: [Date, Date] = [startOfWeek(date), endOfWeek(date)];
    
    render(
      <DateTimePicker
        value={weekRange}
        onChange={defaultProps.onChange}
        mode="week"
      />
    );

    await userEvent.click(screen.getByRole('button'));
    const dayElement = screen.getByText('15');
    fireEvent.mouseEnter(dayElement);

    const weekDays = dayElement.closest('.calendar-days');
    expect(weekDays?.querySelector('.in-range')).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const customStyles = {
      containerClassName: 'custom-container',
      triggerClassName: 'custom-trigger',
    };
    render(<DateTimePicker {...defaultProps} styles={customStyles} />);
    expect(screen.getByRole('button')).toHaveClass('custom-trigger');
  });

  it('applies dark mode', () => {
    render(<DateTimePicker {...defaultProps} darkMode={true} />);
    const container = screen.getByRole('button').closest('.date-time-picker');
    expect(container).toHaveClass('dark-mode');
  });

  it('shows footer when provided', async () => {
    const footer = <div data-testid="custom-footer">Custom Footer</div>;
    render(<DateTimePicker {...defaultProps} footer={footer} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });

  it('handles date notes', async () => {
    const notes = [
      {
        date: new Date('2024-03-15'),
        note: 'Test note',
      },
    ];
    render(<DateTimePicker {...defaultProps} notes={notes} />);
    await userEvent.click(screen.getByRole('button'));
    const dayElement = screen.getByText('15');
    expect(dayElement.parentElement?.querySelector('.opacity-60')).toBeInTheDocument();
  });
});