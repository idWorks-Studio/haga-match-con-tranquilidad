import React from 'react';
import { CardModule } from '@/src/components/ui/organisms/CardModule';
import { ResultsDisplay } from './components/ResultsDisplay';

export interface Module1SectionProps {
  className?: string;
}

export const Module1Section: React.FC<Module1SectionProps> = ({ className = '' }) => {
  return (
    <section id="module1" className={`py-12 md:py-16 ${className}`}>
        <CardModule 
            imageSrc='/assets/images/primero-un-diagnostico.png'
            title='1. Haga primero un diagnóstico'
            description='Responda las siguientes preguntas y revise que tan altas están sus probabilidades de hacer sus sueños.'    
        />

        <ResultsDisplay />
     </section>
  );
};

