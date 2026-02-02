"use client";
import React, { useState, useEffect } from "react";
import { CardModule } from '@/src/components/organisms/CardModule';
import { ScormPlayer } from '@/src/components/organisms/ScormPlayer';

export interface Module3SectionProps {
  className?: string;
}

export const Module3Section: React.FC<Module3SectionProps> = ({ 
  className = '' 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinish = (data: {
    score?: number;
    status?: string;
    suspendData?: string;
  }) => {};

  return (
    <section id="module3" className={`py-6 md:py-8 ${className}`}>
      <CardModule 
        imageSrc='/assets/images/descubra.png'
        title='¡Elija la tranquilidad!'
        title_section='Módulo 3'
        description='Evite los riesgos y tome decisiones más seguras!' 
        onBtnClick={() => setIsModalOpen(true)}
      />

      <ScormPlayer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scormUrl="/scorm/elija-la-tranquilidad/story.html"
        onFinish={handleFinish}
      />
    </section>
  );
};

