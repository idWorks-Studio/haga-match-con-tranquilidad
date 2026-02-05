"use client";
import React, { useState, useEffect } from "react";
import { CardModule } from '@/src/components/organisms/CardModule';
import { ScormPlayer } from '@/src/components/organisms/ScormPlayer';
import { stat } from "fs";

export interface Module3SectionProps {
  className?: string;
}

export const Module3Section: React.FC<Module3SectionProps> = ({ 
  className = '' 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [status, setStatus] = useState<string | null>(null);
  
  const handleFinish = (data: {
    score?: number;
    status?: string;
    suspendData?: string;
  }) => {  
    if (data.status) {
      setStatus(data.status);
    }
  
    // Persistencia simple (opcional)
    localStorage.setItem(
      "scorm_result_module3",
      JSON.stringify({
        score: data.score,
        status: data.status,
      })
    );
  };

  // DEBUG
    useEffect(() => {
      if (status !== null) {
        console.log("SCORM RESULT:", { status });
      }
    }, [status]);

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

      {status === "completed" && (
        <div className="py-16 md:py-12">
          <div className="finish flex flex-col items-center text-center">
            <div className="w-full md:w-[550px] text-center px-8">
              <h2 className="finish-title">Ahora usted está preparado para vivir una vida más tranquila.</h2>
              <p className="mt-4">
                <span>
                  Lo invitamos a seguir cada una de las recomendaciones, haga que su relación con el riesgo no sea una preocupación.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

