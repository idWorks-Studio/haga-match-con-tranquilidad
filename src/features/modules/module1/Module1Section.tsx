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

  // Estado real SCORM
  const [score, setScore] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleFinish = (data: {
    score?: number;
    status?: string;
    suspendData?: string;
  }) => {
    if (data.score !== undefined) {
      setScore(data.score);
    }

    if (data.status) {
      setStatus(data.status);
    }

    // Persistencia simple (opcional)
    localStorage.setItem(
      "scorm_result_module1",
      JSON.stringify({
        score: data.score,
        status: data.status,
      })
    );
  };

  // DEBUG
  useEffect(() => {
    if (score !== null || status !== null) {
      console.log("SCORM RESULT:", { score, status });
    }
  }, [score, status]);

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
        onClose={() => setIsModalOpen(false)}
        scormUrl="/scorm/encuesta/story.html"
        onFinish={handleFinish}
      />

      {/* Mostrar resultados solo cuando el curso terminó */}
      {status && (
        <CardResultsDisplay
          className="pt-6 md:mt-12"
          result={score !== null ? score.toString() : "—"}
          text="De acuerdo a sus respuestas su relación con los riesgos es:"
        />
      )}
    </section>
  );
};