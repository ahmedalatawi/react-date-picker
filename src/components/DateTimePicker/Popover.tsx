import React from 'react';
import { usePopper } from 'react-popper';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ isOpen, onClose, children, content }) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperElement && 
        !popperElement.contains(event.target as Node) && 
        referenceElement && 
        !referenceElement.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, popperElement, referenceElement]);

  return (
    <>
      <div ref={setReferenceElement}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="z-50"
        >
          {content}
        </div>
      )}
    </>
  );
};