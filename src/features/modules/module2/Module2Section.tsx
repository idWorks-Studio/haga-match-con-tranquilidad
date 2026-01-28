"use client";
import React, { useState } from 'react';
import { PlayIcon } from '@/src/components/atoms/PlayIcon';
import Image from "next/image";
import { ConoceMas } from './components/ConoceMas';
import { TikTokPlayer } from '@/src/components/organisms/TikTokPlayer';
import { QuizModule } from '@/src/components/organisms/QuizModule';
import { cuestionario } from '@/src/data/quiz.json';
import { Question } from '@/src/models/QuizModel';
import { CardModuleLeftContent } from '@/src/components/organisms/CardModuleLeftContent';

export interface Module2SectionProps {
  className?: string;
}

const videoThumbnails = [
  { id: 1, title:"Tenga siempre un plan B", image:"/assets/images/thumb1.png", tiktokId: '7568890911501880587' },
  { id: 2, title:"No arriesgue su tranquilidad", image:"/assets/images/thumb2.png", tiktokId: '7568890911501880587' },
  { id: 3, title:"Independencia segura", image:"/assets/images/thumb3.png", tiktokId: '7568890911501880587' },
  { id: 4, title:"Aventuras seguras", image:"/assets/images/thumb4.png", tiktokId: '7568890911501880587' },
  { id: 5, title:"Cada peso cuenta", image:"/assets/images/thumb5.png", tiktokId: '7568890911501880587' },
];

export const Module2Section: React.FC<Module2SectionProps> = ({ className = '' }) => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false); // Estado para el cambio

  const handleOpenVideo = (id: string) => {
    setSelectedVideoId(id);
    setIsModalOpen(true);
  };

  return (
    <section id="module2" className={`py-6 md:py-8 ${className}`}>
        <div className="container mx-auto px-4 max-w-5lg">
        
            {/* 1. Reducimos el padding inferior (pb-16) y la altura mínima (min-h) */}
            <div className="relative module-section rounded-[40px] shadow-sm p-8 md:p-14 pb-16 md:pb-20 min-h-[310px] border border-gray-100 overflow-visible">
            
              {/* Texto alineado a la izquierda con menos margen inferior (mb-6) */}
              <div className="text-center mb-6">
                  <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4] mb-3">
                    ¿Sabe como elegir la opción ideal para su tranquilidad?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.4]">
                    Haga clíc en cada vídeo y descubra cómo otros aprendieron a identificar y administrar el riesgo.
                  </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-[60%] px-4 pt-12 md:pt-0">
                <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-6">
                  {videoThumbnails.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => handleOpenVideo(video.tiktokId)}
                      /* Aumento de tamaño: w-32/h-52 en móvil y w-44/h-72 en escritorio */
                      /* NUEVAS DIMENSIONES:
                        Móvil: de 128px a 160px (w) y de 208px a 260px (h)
                        Escritorio: de 156px a 220px (w) y de 288px a 360px (h)
                      */
                      className="relative flex-shrink-0 w-[160px] h-[260px] md:w-[220px] md:h-[360px] overflow-hidden group cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl rounded-2xl"
                    >
                      {/* Contenedor de Imagen */}
                      <div className="absolute inset-0 bg-gray-200">
                        <Image 
                          src={video.image} 
                          alt={video.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        {/* Degradado más oscuro en la base para resaltar el botón */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>

                      {/* Botón Play ajustado a la parte inferior */}
                      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 shadow-lg group-hover:bg-[#038450] group-hover:scale-110 transition-all duration-300">
                          <PlayIcon 
                            size={24} 
                            className="text-[#038450] group-hover:text-white fill-current transition-colors" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* REPRODUCTOR DE TIKTOK (ORGANISMO) */}
              {selectedVideoId && (
                <TikTokPlayer
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  videoId={selectedVideoId}
                />
              )}

            </div>
            
            {/* Espacio inferior más corto ahora que los videos están más arriba */}
            <div className="h-20 md:h-24"></div>
      </div>

      
      {!showQuiz ? (
        /* PASO A: Card Inicial */
        <CardModuleLeftContent
          className='pt-24 md:pt-44'
          imageSrc="/assets/images/conoce.png"
          title="Ahora que conoce cómo identificar, administrar, clasificar, compartir, prevenir o mitigar los riesgos"
          description="Haga la siguiente actividad y descubra cómo estar más cerca de la tranquilidad."
          onStart={() => setShowQuiz(true)}
        />
      ) : (
        /* PASO B: Quiz (Aparece en el mismo contenedor) */
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <QuizModule  className='pt-24 md:pt-44' preguntas={cuestionario.preguntas as Question[]}/>
        </div>
      )}
    </section>
  );
};