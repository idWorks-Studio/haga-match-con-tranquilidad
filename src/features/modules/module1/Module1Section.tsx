import React from 'react';
import { CardModule } from '@/src/components/ui/organisms/CardModule';
import { CardResultsDisplay } from '@/src/components/ui/organisms/CardResultsDisplay';

export interface Module1SectionProps {
  result?: string;
  className?: string;
}

export const Module1Section: React.FC<Module1SectionProps> = ({ className = '' }) => {
  return (
    <section id="module1" className={`py-6 md:py-8 ${className}`}>
        <CardModule 
            imageSrc='/assets/images/primero-un-diagnostico.png'
            title='¿Situaciones inesperadas?'
            description='Responda las siguientes preguntas y haga un diagnóstico de cómo está su relación con la gestión del riesgo.'    
        />

        <CardResultsDisplay
          className="pt-6 md:mt-12"
          result="Alta"
          text="De acuerdo a sus respuestas su relación con los riesgos es:" 
        />
     </section>
  );
};

