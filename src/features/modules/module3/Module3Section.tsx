import React from 'react';
import { CardModule } from '@/src/components/ui/organisms/CardModule';

export interface Module3SectionProps {
  className?: string;
}

export const Module3Section: React.FC<Module3SectionProps> = ({ className = '' }) => {
  return (
    <section id="module3" className={`py-12 md:py-16 ${className}`}>
        <CardModule 
            imageSrc='/assets/images/descubra.png'
            title='3. Descubra cómo Seguros Bolívar puede acompañarlo a cumplir sus sueños'
            description='Con las siguientes herramientas diseñadas para que usted.'    
        />
     </section>
  );
};

