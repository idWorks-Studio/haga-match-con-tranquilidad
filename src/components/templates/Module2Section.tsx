"use client";
import React, { useState } from 'react';
import { QuizModule } from '@/src/components/organisms/QuizModule';
import { cuestionario } from '@/src/data/quiz.json';
import { Question } from '@/src/models/QuizModel';
import { CardModuleLeftContent } from '@/src/components/organisms/CardModuleLeftContent';
import { ImgVideoButton } from '@/src/components/molecules/ImgVideoButton';
import { Video } from "@/src/models/VideoModel";
import { VideoPlayer } from '@/src/components/organisms/VideoPlayer';

export interface Module2SectionProps {
  className?: string;
}

const videoThumbnails: Video[] = [
  { id: 1, title: "Tenga siempre un plan B", image: "/assets/images/thumb1.png", path: 'assets/videos/03 administrar riesgo.mp4' },
  { id: 2, title: "No arriesgue su tranquilidad", image: "/assets/images/thumb2.png", path: 'assets/videos/04 identificar riesgos.mp4' },
  /*{ id: 3, title:"Independencia segura", image:"/assets/images/thumb3.png", path: 'assets/videos/05 mitigar riesgos.mp4' },*/
  { id: 3, title: "Independencia segura", image: "/assets/images/thumb3.png", path: 'assets/videos/06 asumir riesgos.mp4' },
  { id: 4, title: "Aventuras seguras", image: "/assets/images/thumb4.png", path: 'assets/videos/06 asumir riesgos.mp4' },
  { id: 5, title: "Cada peso cuenta", image: "/assets/images/thumb5.png", path: 'assets/videos/07 compartir riesgos.mp4' },
];

export const Module2Section: React.FC<Module2SectionProps> = ({ className = '' }) => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isChangingStep, setIsChangingStep] = useState(false);

  const handleOpenVideo = (id: string) => {
    setSelectedVideoId(id);
    setIsModalOpen(true);
  };

  const handleFinishingQuiz = () => {
    sessionStorage.setItem("modulo2", "success");
    window.dispatchEvent(new Event("modules-progress-updated"));
    const nextSection = document.getElementById("module3");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleStartQuiz = () => {
    setIsChangingStep(true);
    window.setTimeout(() => {
      setShowQuiz(true);
      setIsChangingStep(false);
    }, 280);
  };

  return (
    <section id="module2" className={`py-6 md:py-8 ${className}`}>
      <div className="relative pb-10">
        <div className="module-container module-section-bg pb-10 md:pb-30 overflow-visible">
          <p className='pt-8 md:pt-10'><span className="module-title">Módulo 2</span></p>
          <div className="text-center mb-6">
            <h2 className="title m-4">
              ¿Sabe cómo elegir la opción ideal para su tranquilidad?
            </h2>
            <p className="text-base text-gray-700 leading-[1.4]">
              Haga clic en cada video y descubra cómo otros aprendieron a identificar y administrar el riesgo.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 px-4 pt-12 md:pt-0">
            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-6">
              {videoThumbnails.map((video) => (
                <ImgVideoButton
                  key={video.id}
                  video={video}
                  onClick={() => handleOpenVideo(video.path)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {!showQuiz ? (
        <div className={`transition-all duration-400 ease-out ${isChangingStep ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
          <CardModuleLeftContent
            className='pt-40 md:pt-44'
            imageSrc="/assets/images/conoce.png"
            title="Ahora que conoce cómo identificar, administrar, clasificar, compartir, prevenir o mitigar los riesgos"
            description="Haga la siguiente actividad y descubra cómo estar más cerca de la tranquilidad."
            onStart={handleStartQuiz}
          />
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out">
          <QuizModule
            className='pt-40 md:pt-44'
            preguntas={cuestionario.preguntas as Question[]}
            onFinish={handleFinishingQuiz}
          />
        </div>
      )}

      {selectedVideoId && (
        <VideoPlayer
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={selectedVideoId}
        />
      )}
    </section>
  );
};
