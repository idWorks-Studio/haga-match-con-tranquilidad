import { CardModuleLeftContent } from '@/src/components/ui/organisms/CardModuleLeftContent';
import React from 'react';

export interface ConoceMasProps {
  className?: string;
}

export const ConoceMas: React.FC<ConoceMasProps> = ({ className = '' }) => {
    const miTexto = `Ahora que conoce cómo identificar, administrar, clasificar, compartir, prevenir o mitigar los riesgos. Haga la siguiente actividad y <span class="font-bold">continúe aumentando las probabilidades de cumplir sus sueños con tranquilidad.</span>`;
    return (
        <CardModuleLeftContent 
            imageSrc="/assets/images/conoce.png"
            title=""
            descriptionHtml={miTexto}
        />
  );
};