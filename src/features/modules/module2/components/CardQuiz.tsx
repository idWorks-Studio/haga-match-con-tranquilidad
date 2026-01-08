import React from 'react';
import Image from "next/image";

export interface CardQuizProps {
  className?: string;
}

export const CardQuiz: React.FC<CardQuizProps> = ({ className = '' }) => {
  const quizOptions = [
    'Identificar el riesgo y el daño que puede causar',
    'Tomar medidas para evitar que suceda o para disminuir su impacto',
    'Transferir todos los riesgos a otras personas o instituciones',
    'Ignorar el riesgo mientras no ocurra, y reaccionar solo si pasa algo',
    'Tener presente opciones de respuesta y recuperación para cuando el riesgo se materialice',
    'Todas las anteriores',
  ];

  return (
    <div className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Illustration */}
            <div className="relative w-full md:w-[278px] h-[346px] flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src="/assets/images/quiz-illustration.svg"
                alt="Quiz Illustration"
                fill // Sustituye a layout="fill"
                className="object-cover" // Sustituye a objectFit="cover"
                sizes="(max-width: 768px) 100vw, 443px"
                priority
              />
            </div>

            {/* Right side - Quiz Content */}
            <div className="bg-[#f8f8f8] bg-[url('/assets/images/texture-paper.png')] rounded-2xl shadow-lg">
              <div className="flex-1 space-y-6 p-6 md:p-8 text-left">
                <div className="space-y-2">
                  <p className="text-base text-gray-700 leading-[1.4]">
                    Seleccione las respuestas correctas
                  </p>
                  <h3 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                    ¿Cuáles son los 3 pasos para administrar un riesgo?
                  </h3>
                </div>

                {/* Quiz Options */}
                <div className="space-y-2">
                  {quizOptions.map((option, index) => (
                    <button
                      key={index}
                      className="w-full bg-[#ffe16f] text-[#038450] px-3 py-2 rounded-full text-sm md:text-base font-bold text-center hover:bg-[#f4d461] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

