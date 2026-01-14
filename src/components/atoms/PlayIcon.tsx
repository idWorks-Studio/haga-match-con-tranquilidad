import React from 'react';

export interface PlayIconProps {
  className?: string;
  size?: number;
}

export const PlayIcon: React.FC<PlayIconProps> = ({ 
  className = '', 
  size = 36 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="18" cy="18" r="18" fill="white" fillOpacity="0.9" />
      <path
        d="M14 12L24 18L14 24V12Z"
        fill="#038450"
      />
    </svg>
  );
};

