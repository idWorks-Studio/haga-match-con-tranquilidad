import React from 'react';
import Image from 'next/image'

export interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="hero">
        <div className="relative w-full overflow-hidden">
          <Image 
            src="/assets/images/hero-section.png" 
            alt="Hero Section" 
            width={1920}
            height={400}
            // h-[250px] para que no se vea minúscula en móvil
            // md:h-auto para que recupere su proporción en PC
            className="w-full h-[250px] md:h-auto object-cover object-center"
            sizes="100vw"
            priority
          />
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-12 space-y-12">
        <div className="relative">
          <div className="bg-[#038450] text-white px-6 py-4 md:py-6 rounded-3xl shadow-md relative">
            <p className="text-center text-lg md:text-xl font-bold">
              Tranquilo, nosotros le explicamos
            </p>
            {/* Pointed bottom */}
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 
                    border-l-[20px] border-l-transparent 
                    border-r-[20px] border-r-transparent 
                    border-t-[20px] border-t-[#038450]">
          </div>
        </div>

        <div className="mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Con el programa de educación financiera de Seguros Bolívar, queremos ayudarle a enfrentar los riesgos y a vivir con tranquilidad.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-[#038450]">
                Navegue los siguientes 3 módulos y conozca cómo identificar los riesgos y aumentar su probabilidad de alcanzar sus sueños
              </span>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

