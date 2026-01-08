import React from 'react';
import { Button } from '@/src/components/ui/atoms/Button';

export interface Module4CardProps {
  className?: string;
}

export const Module4Card: React.FC<Module4CardProps> = ({ className = '' }) => {
  return (
    <section id="module4" className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
            {/* Left side - Image */}
            <div className="relative w-full md:w-[443px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Company Image</span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4]">
                3. Descubra cómo Seguros Bolívar puede acompañarlo a cumplir sus sueños
              </h2>
              <p className="text-base text-gray-700 leading-[1.4] max-w-md">
                Con las siguientes herramientas diseñadas para que usted
              </p>
              <div>
                <Button>Iniciar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

