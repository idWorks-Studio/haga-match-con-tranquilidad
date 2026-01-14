"use client";
import React, { useState } from 'react';
import { CardModule } from '@/src/components/organisms/CardModule';
import { CardResultsDisplay } from '@/src/components/organisms/CardResultsDisplay';
import { ScormPlayer } from '@/src/components/organisms/ScormPlayer';

export interface Module1SectionProps {
  className?: string;
}

export const Module1Section: React.FC<Module1SectionProps> = ({ className = '' }) => {
  // 1. Creamos el estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultado, setResultado] = useState<string | null>(null); // Estado para la respuesta

  const handleFinish = (data: { type: string, value: string }) => {
    // Aquí puedes personalizar qué mostrar según lo que envíe el SCORM
    if (data.type === 'score') {
      setResultado(`Tu puntaje fue: ${data.value}%`);
    } else {
      setResultado("¡Encuesta completada con éxito!");
    }
    
    // OPCIONAL: Guardar en el navegador para que no se pierda al recargar
    localStorage.setItem("estado_encuesta", "terminado");
  };

  return (
    <section id="module1" className={`py-6 md:py-8 ${className}`}>
        <CardModule 
          imageSrc='/assets/images/primero-un-diagnostico.png'
          title='¿Situaciones inesperadas?'
          description='Responda las siguientes preguntas y haga un diagnóstico de cómo está su relación con la gestión del riesgo.'    
          onBtnClick={() => setIsModalOpen(true)}
        />

        {/* El modal que reacciona al estado */}
        <ScormPlayer 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          scormUrl="/scorm/encuesta/story.html" 
          onFinish={handleFinish}
        />
        
        {(() => {
          console.log('User Score:', resultado);
          return null;
        })()}

        <CardResultsDisplay
          className="pt-6 md:mt-12"
          result="Alta"
          text="De acuerdo a sus respuestas su relación con los riesgos es:" 
        />

     </section>
  );
};

