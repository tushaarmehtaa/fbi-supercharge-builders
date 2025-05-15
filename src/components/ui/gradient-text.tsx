import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export const GradientText = ({
  children,
  className = "",
  from = "from-blue-500",
  to = "to-blue-300",
}: GradientTextProps) => {
  return (
    <span
      className={`whitespace-pre-wrap bg-gradient-to-b ${from} ${to} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
