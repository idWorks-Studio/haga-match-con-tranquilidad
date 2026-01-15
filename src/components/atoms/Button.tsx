"use client";
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}) => {
  const baseClasses = 'flex items-center justify-center px-4 py-2 rounded-full font-bold text-center transition-colors';
  const variantClasses = variant === 'primary' 
    ? 'bg-[#ffe16f] text-[#038450] hover:bg-[#f4d461]' 
    : 'bg-transparent border border-[#038450] text-[#038450] hover:bg-[#038450] hover:text-white';
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

