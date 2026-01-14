import { CardModuleLeftContent } from '@/src/components/ui/organisms/CardModuleLeftContent';
import React from 'react';

export interface ConoceMasProps {
  className?: string;
}

export const ConoceMas: React.FC<ConoceMasProps> = ({ className = '' }) => {
    return (
        <CardModuleLeftContent 
            className={className}
            imageSrc="/assets/images/conoce.png"
            title="Ahora que conoce cómo identificar, administrar, clasificar, compartir, prevenir o mitigar los riesgos"
            description="Haga la siguiente actividad y descubra cómo estar más cerca de la tranquilidad."
        />
  );
};