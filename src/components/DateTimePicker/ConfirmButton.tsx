import type { FC, ReactNode } from "react";

interface ConfirmButtonProps {
  onConfirm: () => void;
  className?: string;
  children?: ReactNode;
  darkMode?: boolean;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({
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