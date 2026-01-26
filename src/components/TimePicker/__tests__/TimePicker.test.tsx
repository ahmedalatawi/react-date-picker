import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TimePicker } from '../TimePicker';

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
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('02:30 PM')).toBeInTheDocument();
  });

  it('renders in 24-hour format', () => {
    render(<TimePicker {...defaultProps} use24Hour />);
    expect(screen.getByText('14:30')).toBeInTheDocument();
  });

  it('opens time picker on trigger click', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('PM')).toBeInTheDocument();
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

  it('handles disabled state', () => {
    render(<TimePicker {...defaultProps} disabled />);
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('applies custom styles', () => {
    const customStyles = {
      containerClassName: 'custom-container',
      triggerClassName: 'custom-trigger',
    };
    render(<TimePicker {...defaultProps} styles={customStyles} />);
    expect(screen.getByRole('button')).toHaveClass('custom-trigger');
  });

  it('applies dark mode', () => {
    render(<TimePicker {...defaultProps} darkMode={true} />);
    const container = screen.getByRole('button').closest('.time-picker');
    expect(container).toHaveClass('dark-mode');
  });

  it('closes on outside click', async () => {
    render(<TimePicker {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('02')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('02')).not.toBeInTheDocument();
  });
});