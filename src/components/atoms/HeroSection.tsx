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

        {/* SELLO UBICADO EN EL BORDE DERECHO */}
        <div className="absolute right-2 bottom-2 h-[60px] md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:h-[50%] z-10 pointer-events-none flex items-center justify-end">
          <Image 
            src="/assets/images/seguros-comercial.png" // Replace with your stamp path
            alt="Sello de Vigilancia Superintendencia Financiera de Colombia"
            width={300}  // Ancho original aproximado
            height={1000} // Alto original aproximado
            quality={100} // Alta calidad para texto pequeño
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-12 space-y-12">
        <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[501px] lg:max-w-[600px] xl:max-w-[680px]">
          <Image 
            src="/assets/images/tranquilo-nosotros-le-explicamos.png" 
            alt="Tranquilo, nosotros le explicamos"
            width={680} // Subimos el ancho base del render de Next.js para mayor nitidez
            height={77} // Manteniendo la proporción exacta ~8.8:1
            quality={100} // Máxima calidad para pantallas Retina/High-DPI
            className="w-full h-auto object-contain mx-auto"
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
