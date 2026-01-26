import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { TimePicker } from '../TimePicker';
import { enUS, ja } from 'date-fns/locale';

describe('TimePicker', () => {
  const defaultProps = {
    value: new Date('2024-03-15T14:30:00'),
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<TimePicker {...defaultProps} />);
    expect(screen.getByText('02:30 PM')).toBeInTheDocument();
  });

  it('supports 24-hour format', () => {
    render(<TimePicker {...defaultProps} use24Hour />);
    expect(screen.getByText('14:30')).toBeInTheDocument();
  });

  it('opens time picker dropdown on click', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('handles hour selection', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('03'));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('handles minute selection', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText(':'));
    await userEvent.click(screen.getByText('45'));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('toggles between AM/PM', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('PM'));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('supports different locales', () => {
    const { rerender } = render(<TimePicker {...defaultProps} locale={enUS} />);
    expect(screen.getByText(/PM/)).toBeInTheDocument();

    rerender(<TimePicker {...defaultProps} locale={ja} />);
    expect(screen.getByText(/午後/)).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    render(<TimePicker {...defaultProps} className="custom-time-picker" />);
    expect(screen.getByRole('button').parentElement?.parentElement)
      .toHaveClass('custom-time-picker');
  });
});