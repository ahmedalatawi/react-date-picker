/* eslint-disable no-case-declarations */
import { useCallback, useEffect } from "react";

export const useA11y = (
  isOpen: boolean,
  onClose: () => void,
  triggerRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>,
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          triggerRef.current?.focus();
          break;
        case "Tab":
          if (!contentRef.current) return;
          const focusableElements = contentRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement?.focus();
          }
          break;
      }
    },
    [isOpen, onClose, triggerRef, contentRef],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      const firstFocusable = contentRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen, contentRef]);

  return {
    role: "dialog",
    "aria-modal": true,
    "aria-label": "Date and time picker",
  };
};
