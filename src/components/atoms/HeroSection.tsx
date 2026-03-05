import React from 'react';
import Image from 'next/image'

export interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="hero" className={`${className}`}>
      <div className="relative w-full overflow-hidden">
        <Image 
          src="/assets/images/hero-section.png" 
          alt="Hero Section" 
          width={2200}
          height={725}
          quality={95}
          // h-[250px] para que no se vea minúscula en móvil
          // md:h-auto para que recupere su proporción en PC
          className="w-full h-[250px] md:h-auto object-cover object-center"
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-12 space-y-12">
        <div className="relative">
          <Image 
            src="/assets/images/tranquilo-nosotros-le-explicamos.png" 
            alt="Tranquilo, nosotros le explicamos"
            width={501}
            height={57}
            quality={95}
            className="w-full object-center"
            priority
          />
        </div>

        <div className="mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed md:mr-4 md:ml-4">
              Con el programa de educación financiera de Seguros Bolívar, queremos ayudarle a enfrentar los riesgos y a vivir con tranquilidad.
              <br/><br/>
              En esta experiencia, encontrará 3 módulos que le permitirá identificar cómo administrar mejor las situaciones inesperadas que se pueden presentar en su día a día.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
