import type { FC, ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`tooltip ${className}`}>
      {content}
      <div className="tooltip-arrow" />
    </div>
  );
};
