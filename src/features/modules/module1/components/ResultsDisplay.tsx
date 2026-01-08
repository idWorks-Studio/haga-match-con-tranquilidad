import React from 'react';

export interface ResultsDisplayProps {
  percentage?: number;
  className?: string;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  percentage = 30,
  className = '',
}) => {
  return (
    <div className={`container mx-auto px-4 max-w-4xl mt-8 md:mt-12 ${className}`}>
      <div className="relative">
        {/* Background yellow block with torn edge effect */}
        <div className="bg-[#f4d461] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Torn paper edge effect - using clip-path for visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#f4d461] clip-path-torn"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              {/* Left side - Text */}
              <div className="flex-1 space-y-3">
                <p className="text-base text-gray-800 leading-[1.4]">
                  De acuerdo a sus respuestas la probabilidad de
                </p>
                <p className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                  superar los riesgos que pueden alejarlo de sus sueños es:
                </p>
              </div>

              {/* Right side - Percentage */}
              <div className="text-center md:text-right">
                <div className="text-[#038450] text-7xl md:text-[127px] font-bold leading-none tracking-tight">
                  {percentage}%
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

