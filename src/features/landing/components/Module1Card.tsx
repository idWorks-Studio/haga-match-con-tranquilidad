import React from 'react';
import { Button } from '@/src/components/atoms/Button';

export interface Module1CardProps {
  className?: string;
}

export const Module1Card: React.FC<Module1CardProps> = ({ className = '' }) => {
  return (
    <section id="module1" className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
            {/* Left side - Image */}
            <div className="relative w-full md:w-[443px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Diagnostic Image</span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col gap-3 flex-1">
              <ol className="list-decimal list-inside">
                <li className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                  <span className="text-[#038450]">Haga primero un diagnóstico</span>
                </li>
              </ol>
              <p className="text-base text-gray-700 leading-[1.4] max-w-md">
                Responda las siguientes preguntas y revise que tan altas están sus probabilidades de hacer sus sueños.
              </p>
              <div className="mt-4">
                <Button>Iniciar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

