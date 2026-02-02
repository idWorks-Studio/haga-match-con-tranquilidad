"use client";

import Image from "next/image";
import { PlayIcon } from "../atoms/PlayIcon";
import { Video } from "@/src/models/VideoModel";

interface ImgVideoButtonProps {
  className?: string; 
  video: Video;
  onClick: () => void;
}

export const ImgVideoButton = ({ 
    className = '', 
    video,
    onClick
}: ImgVideoButtonProps) => {

  return (
    <div 
        onClick={onClick}
        className={`relative flex-shrink-0 w-[128px] h-[208px] md:w-[156px] md:h-[288px] overflow-hidden group cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${className}`}>
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
  );
};