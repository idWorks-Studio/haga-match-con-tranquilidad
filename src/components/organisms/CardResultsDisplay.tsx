"use client";
import React from 'react';
import { Button } from '../atoms/Button';

export interface CardResultsDisplayProps {
  className?: string;
  text?: string;
  result?: "MEDIA" | "BAJA" | "ALTA" | string;
}

type ResultConfig = {
  title: string;
  description: string;
  illustration?: string;
  buttonText: string;
  number: string;
};

const resultConfigs: Record<"MEDIA" | "BAJA" | "ALTA", ResultConfig> = {
  ALTA: {
    number: "3",
    title: "¡Felicitaciones! Su probabilidad de alcanzar sus sueños es ALTA",
    description: "Ha demostrado un excelente conocimiento en la identificación y administración de riesgos. Siga así y continúe construyendo un futuro tranquilo.",
    buttonText: "Continuar",
  },
  MEDIA: {
    number: "2",
    title: "Su probabilidad de alcanzar sus sueños es MEDIA",
    description: "Tiene un conocimiento básico sobre la gestión de riesgos. Le recomendamos seguir aprendiendo y aplicar las estrategias para mejorar su relación con los riesgos.",
    buttonText: "Continuar",
  },
  BAJA: {
    number: "1",
    title: "Su probabilidad de alcanzar sus sueños es BAJA",
    description: "Es importante que fortalezca sus conocimientos sobre la gestión de riesgos. Le recomendamos revisar los módulos y aplicar las estrategias aprendidas para mejorar su situación.",
    buttonText: "Continuar",
  },
};

export const CardResultsDisplay: React.FC<CardResultsDisplayProps> = ({ 
  className = '', 
  text, 
  result,
}) => {
  // Validate result type
  const validResult = result && ["MEDIA", "BAJA", "ALTA"].includes(result.toUpperCase()) 
    ? result.toUpperCase() as "MEDIA" | "BAJA" | "ALTA"
    : null;

  if (!validResult) {
    // Fallback to old display if result is not valid
    return (
      <div className={className}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="module-section rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="text-left">
                  <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                    <span className="text-[#038450]">{text}</span>
                  </h2>
                </div>
              </div>
              <div className="bg-[#f4d461] relative w-full md:w-[420px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden">
                <div className="text-center flex flex-col justify-center items-center h-full px-4">
                  <div className="text-[#038450] text-7xl md:text-[80px] font-bold leading-none tracking-tight">
                    {result || "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const config = resultConfigs[validResult];
  const isAlta = validResult === "ALTA";

  return (
    <div className={className}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="relative p-6 md:p-8">
            {/* Number badge */}
            <div className="mb-4">
              <span className="text-[#038450] text-5xl md:text-6xl font-bold">
                {config.number}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4] mb-4 max-w-2xl">
              {config.title}
            </h2>

            {/* Illustration placeholder - can be replaced with actual image */}
            {isAlta && (
              <div className="absolute top-4 right-4 w-32 h-32 md:w-40 md:h-40 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[#038450] rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl">✓</span>
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
              {config.description}
            </p>

            {/* Button */}
            <div className="mt-6">
              <Button onClick={() => {
                // Scroll to next section or handle navigation
                const nextSection = document.getElementById('module2');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                {config.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}