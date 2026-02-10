import React from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-[#038450] text-white py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base">
          Seguros Bolívar 2024
        </p>
      </div>
    </footer>
  );
};