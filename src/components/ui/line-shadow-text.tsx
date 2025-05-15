import React from "react";

interface LineShadowTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
}

export const LineShadowText = ({
  children,
  className = "",
  shadowColor = "white",
}: LineShadowTextProps) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `0 0 1px ${shadowColor}, 0 0 1px ${shadowColor}, 0 0 1px ${shadowColor}, 0 0 1px ${shadowColor}`,
      }}
    >
      {children}
      <span
        className="absolute inset-x-0 bottom-0 border-b-[0.15em]"
        style={{ borderColor: shadowColor }}
      />
    </span>
  );
};
