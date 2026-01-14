import React from 'react';

export interface CardResultsDisplayProps {
  className?: string;
  text?: string;
  result?: string;
}

export const CardResultsDisplay: React.FC<CardResultsDisplayProps> = ({ 
  className = '', text, result,
}) => {
  return (
    <div className={className}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="module-section rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Text */}
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="text-left">
                <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                  <span className="text-[#038450]">{text}</span>
                </h2>
              </div>
            </div>
          
            {/* Right side - Result */}
            <div className="bg-[#f4d461] relative w-full md:w-[420px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden">
              <div className="text-center flex flex-col justify-center items-center h-full px-4">
                <div className="text-[#038450] text-7xl md:text-[80px] font-bold leading-none tracking-tight">
                  {result}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}