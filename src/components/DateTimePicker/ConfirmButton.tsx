import React from 'react';

interface ConfirmButtonProps {
  onConfirm: () => void;
  className?: string;
  children?: React.ReactNode;
  darkMode?: boolean;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  onConfirm,
  className = '',
  children = 'OK',
  darkMode = false,
}) => {
  return (
    <button
      type="button"
      onClick={onConfirm}
      className={`confirm-button ${darkMode ? 'dark-mode' : ''} ${className}`}
    >
      {children}
    </button>
  );
};