import type { FC, ReactNode } from "react";
import { Popover as BasePopover } from "@atawi/react-popover";
import "@atawi/react-popover/dist/style.css";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  content: ReactNode;
  portalClassName?: string;
  contentClassName?: string;
}

export const Popover: FC<PopoverProps> = ({
  isOpen,
  onClose,
  children,
  content,
  portalClassName = "",
  contentClassName = "",
}) => {
  return (
    <BasePopover
      trigger={children}
      contentClassName={contentClassName}
      content={<div className={portalClassName}>{content}</div>}
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
      placement="bottom-start"
      autoPlacement
      triggerType="click"
    />
  );
};
