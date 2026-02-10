"use client";
import React, { useState, useEffect } from "react";
import { CardModule } from "@/src/components/organisms/CardModule";
import { CardResultsDisplay } from "@/src/components/organisms/CardResultsDisplay";
import { ScormPlayer } from "@/src/components/organisms/ScormPlayer";

export interface Module1SectionProps {
  className?: string;
}

export const Module1Section: React.FC<Module1SectionProps> = ({
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState<"media" | "baja" | "alta" | null>(null);

  const handleFinish = (data: any) => {
    let finalResult = data.result;

    // Si el player no detectó el nivel, lo buscamos manualmente aquí
    if (!finalResult && data.suspendData) {
      if (data.suspendData.includes("alta")) finalResult = "alta";
      else if (data.suspendData.includes("media")) finalResult = "media";
      else if (data.suspendData.includes("baja")) finalResult = "baja";
    }

    if (finalResult) {
      setResult(finalResult); // Esto activará el CardResultsDisplay
      localStorage.setItem("modulo1", "success");
      window.dispatchEvent(new Event("modules-progress-updated"));
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="module1" className={`py-6 md:py-8 ${className}`}>
      <CardModule
        imageSrc="/assets/images/primero-un-diagnostico.png"
        title="¿Situaciones inesperadas?"
        title_section="Módulo 1"
        description="Responda las siguientes preguntas y haga un diagnóstico de cómo está su relación con la gestión del riesgo."
        onBtnClick={() => setIsModalOpen(true)}
      />

      <ScormPlayer
        isOpen={isModalOpen}
        onClose={handleClose}
        scormUrl="/scorm/encuesta 1/story.html"
        onFinish={handleFinish}
      />

      {/* Mostrar resultados solo cuando el curso terminó y tenemos un resultado */}
      {result && (
        <CardResultsDisplay
          className="pt-6 md:mt-12"
          result={result}
          text="De acuerdo a sus respuestas su relación con los riesgos es:"
        />
      )}
    </section>
  );
};
