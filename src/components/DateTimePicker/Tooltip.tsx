import React from "react";

interface TooltipProps {
  content: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
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
