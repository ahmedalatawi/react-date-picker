import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ConfirmButton } from '../ConfirmButton';

describe('ConfirmButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default text', () => {
    render(<ConfirmButton onConfirm={() => {}} />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<ConfirmButton onConfirm={() => {}}>Confirm</ConfirmButton>);
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('calls onConfirm when clicked', async () => {
    const handleConfirm = vi.fn();
    render(<ConfirmButton onConfirm={handleConfirm} />);
    await userEvent.click(screen.getByText('OK'));
    expect(handleConfirm).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<ConfirmButton onConfirm={() => {}} className="custom-class" />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
  it('applies dark mode', () => {
    render(<ConfirmButton onConfirm={() => {}} darkMode={true} />);
    expect(screen.getByRole('button')).toHaveClass('dark-mode');
  });