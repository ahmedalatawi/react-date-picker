import React from 'react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useA11y } from '../useA11y';

describe('useA11y', () => {
  const mockOnClose = vi.fn();
  const mockTriggerRef = { current: document.createElement('button') };
  const mockContentRef = { current: document.createElement('div') };

  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = '';
    document.body.appendChild(mockTriggerRef.current);
    document.body.appendChild(mockContentRef.current);
  });

  it('returns correct ARIA attributes', () => {
    const { result } = renderHook(() =>
      useA11y(true, mockOnClose, mockTriggerRef, mockContentRef)
    );

    expect(result.current).toEqual({
      role: 'dialog',
      'aria-modal': true,
      'aria-label': 'Date and time picker',
    });
  });

  it('handles escape key press when open', () => {
    renderHook(() =>
      useA11y(true, mockOnClose, mockTriggerRef, mockContentRef)
    );

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('does not handle escape key when closed', () => {
    renderHook(() =>
      useA11y(false, mockOnClose, mockTriggerRef, mockContentRef)
    );

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('handles tab key for focus trapping', () => {
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    mockContentRef.current.appendChild(button1);
    mockContentRef.current.appendChild(button2);

    renderHook(() =>
      useA11y(true, mockOnClose, mockTriggerRef, mockContentRef)
    );

    button1.focus();
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
    Object.defineProperty(document, 'activeElement', { value: button1, configurable: true });
    
    document.dispatchEvent(tabEvent);
    
    // Focus should move to last element
    expect(document.activeElement).toBe(button2);
  });
});