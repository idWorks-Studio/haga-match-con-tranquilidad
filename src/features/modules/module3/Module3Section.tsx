import React from 'react';
import { CardModule } from '@/src/components/organisms/CardModule';
import { ScormFrame } from '@/src/components/molecules/ScormFrame';

export interface Module3SectionProps {
  className?: string;
}

export const Module3Section: React.FC<Module3SectionProps> = ({ className = '' }) => {
  return (
    <section id="module3" className={`py-6 md:py-8 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <ScormFrame src="/scorm/elija-la-tranquilidad/story.html" />
      </div>
        {/*<CardModule 
            imageSrc='/assets/images/descubra.png'
            title='¡Elija la tranquilidad!'
            description='Evite los riesgos y tome decisiones más seguras!' 
            onBtnClick={() => {}}
        />*/}
     </section>
  );
};

