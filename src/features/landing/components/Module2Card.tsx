import { PlayIcon } from '@/src/components/ui/atoms/PlayIcon';
import React from 'react';

export interface Module2CardProps {
  className?: string;
}

export const Module2Card: React.FC<Module2CardProps> = ({ className = '' }) => {
    const videoThumbnails = [
        { id: 1, alt: 'Video 1' },
        { id: 2, alt: 'Video 2' },
        { id: 3, alt: 'Video 3' },
        { id: 4, alt: 'Video 4' },
        { id: 5, alt: 'Video 5' },
    ];
  
    return (
        <section id="module2" className={`py-12 md:py-16 ${className}`}>
            <div className="container mx-auto px-4 max-w-5xl space-y-8">
                {/* Card Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4] mb-3">
                        2. Ellos ya están cumpliendo sus sueños
                    </h2>
                    <p className="text-base text-gray-700 leading-[1.4] max-w-2xl">
                        Vea las siguientes historias y conozca cómo ellos aumentaron sus probabilidades y aprendieron a administrar el riesgo
                    </p>
                    <p className="text-base text-gray-700 leading-[1.4] font-bold mt-2">
                        ¡Haga que su historia sea la próxima!
                    </p>
                </div>
            
                {/* Video Gallery */}
                <div className="relative">
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {videoThumbnails.map((video) => (
                            <div
                                key={video.id}
                                className="relative flex-shrink-0 w-[121px] h-[216px] rounded-xl overflow-hidden group cursor-pointer"
                             >
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs">Video {video.id}</span>
                                </div>
                                {/* Play icon overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <PlayIcon size={36} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};