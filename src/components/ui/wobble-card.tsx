import React, { useState } from "react";

export const WobbleCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/[0.08] p-8 ${containerClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative z-10 h-full ${className}`}
      >
        {children}
      </div>
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 transition-opacity duration-300 ${isHovered ? 'opacity-15' : 'opacity-0'}`}
      />
    </div>
  );
};
