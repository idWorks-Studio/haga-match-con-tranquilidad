import React from 'react';
import { Button } from '@/src/components/ui/atoms/Button';

export interface Module3CardProps {
  className?: string;
}

export const Module3Card: React.FC<Module3CardProps> = ({ className = '' }) => {
  return (
    <section id="module3" className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
            {/* Left side - Content */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-[1.4]">
                  Ahora que conoce cómo identificar, administrar, clasificar, compartir, prevenir o mitigar los riesgos. Haga la siguiente actividad y{' '}
                  <span className="font-bold">continúe aumentando las probabilidades de cumplir sus sueños con tranquilidad.</span>
                </p>
              </div>
              <div>
                <Button>Iniciar</Button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="relative w-full md:w-[504px] h-[407px] flex-shrink-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Activity Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

