import React from 'react';
import { PlayIcon } from '@/src/components/ui/atoms/PlayIcon';
import Image from "next/image";
import { ConoceMas } from './components/ConoceMas';
import { CardQuiz } from './components/CardQuiz';

export interface Module2SectionProps {
  className?: string;
}

export const Module2Section: React.FC<Module2SectionProps> = ({ className = '' }) => {
  const videoThumbnails = [
    { id: 1, alt: 'Video 1', title:'', image: '' },
    { id: 2, alt: 'Video 2', title:'', image: '' },
    { id: 3, alt: 'Video 3', title:'', image: '' },
    { id: 4, alt: 'Video 4', title:'', image: '' },
    { id: 5, alt: 'Video 5', title:'', image: '' },
  ];

  return (
    <section id="module2" className={`py-6 md:py-8 ${className}`}>
        <div className="container mx-auto px-4 max-w-5xl">
        
            {/* 1. Reducimos el padding inferior (pb-16) y la altura mínima (min-h) */}
            <div className="relative bg-[#f8f8f8] bg-[url('/assets/images/texture-paper.png')] rounded-[40px] shadow-sm p-8 md:p-14 pb-16 md:pb-20 min-h-[310px] border border-gray-100 overflow-visible">
            
            {/* Texto alineado a la izquierda con menos margen inferior (mb-6) */}
            <div className="text-center mb-6">
                <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4] mb-3">
                  ¿Sabe como elegir la opción ideal para su tranquilidad?
                </h2>
                <p className="text-base text-gray-700 leading-[1.4]">
                  Haga clíc en cada vídeo y descubra cómo otros aprendieron a identificar y administrar el riesgo.
                </p>
            </div>

            {/* 2. Ajustamos translate-y para que suban más hacia el texto */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 px-4">
                <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4">
                {videoThumbnails.map((video) => (
                    <div
                    key={video.id}
                    className="relative flex-shrink-0 w-[100px] h-[160px] md:w-[120px] md:h-[200px] overflow-hidden group cursor-pointer shadow-lg transition-transform hover:-translate-y-2"
                    >
                    <div className="absolute inset-0 bg-gray-200">
                        <Image src={video.image} alt={video.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-2 group-hover:scale-110 transition-transform">
                        <PlayIcon size={18} className="text-[#038450] fill-current" />
                        </div>
                    </div>

                    <div className="absolute bottom-2 left-0 right-0 text-center">
                        <span className="text-white text-[9px] md:text-[11px] font-bold uppercase drop-shadow-md">
                        {video.title}
                        </span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
            
            {/* Espacio inferior más corto ahora que los videos están más arriba */}
            <div className="h-20 md:h-24"></div>
      </div>

      <ConoceMas className='pt-12 md:pt-16'/>

      <CardQuiz />
    </section>
  );
};