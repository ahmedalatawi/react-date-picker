import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Popover } from '../Popover';

describe('Popover', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: <button>Trigger</button>,
    content: <div>Popover Content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders trigger element when closed', () => {
    render(<Popover {...defaultProps} isOpen={false} />);
    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('renders content when open', () => {
    render(<Popover {...defaultProps} />);
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('calls onClose when clicking outside', async () => {
    render(<Popover {...defaultProps} />);
    fireEvent.mouseDown(document.body);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside', async () => {
    render(<Popover {...defaultProps} />);
    await userEvent.click(screen.getByText('Popover Content'));
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('positions content relative to trigger', () => {
    render(<Popover {...defaultProps} />);
    const content = screen.getByText('Popover Content');
    expect(content.parentElement).toHaveStyle({ position: 'absolute' });
  });
});