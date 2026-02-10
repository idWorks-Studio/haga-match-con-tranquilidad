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

  const [status, setStatus] = useState<string | null>(null);
  const [allModulesCompleted, setAllModulesCompleted] = useState(false);

  const checkAllModulesCompleted = () => {
    if (typeof window === "undefined") return false;

    return (
      localStorage.getItem("modulo1") === "success" &&
      localStorage.getItem("modulo2") === "success" &&
      localStorage.getItem("modulo3") === "success"
    );
  };
  
  const handleFinish = () => {  
    localStorage.setItem("modulo3", "success");
    window.dispatchEvent(new Event("modules-progress-updated"));
    setAllModulesCompleted(checkAllModulesCompleted());
  };

  useEffect(() => {
    const updateCompletion = () => {
      setAllModulesCompleted(checkAllModulesCompleted());
    };

    updateCompletion();
    window.addEventListener("modules-progress-updated", updateCompletion);
    window.addEventListener("storage", updateCompletion);

    return () => {
      window.removeEventListener("modules-progress-updated", updateCompletion);
      window.removeEventListener("storage", updateCompletion);
    };
  }, []);

  useEffect(() => {
    if (!allModulesCompleted) return;

    const finalSection = document.getElementById("module3-final");
    if (finalSection) {
      finalSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [allModulesCompleted]);

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
        scormUrl="/scorm/encuesta 2/story.html"
        onFinish={handleFinish}
      />

      {allModulesCompleted && (
        <div id="module3-final" className="py-16 md:py-12">
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

