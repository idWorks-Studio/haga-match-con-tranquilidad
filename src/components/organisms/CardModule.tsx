"use client";
import Image from "next/image";
import { Button } from "../atoms/Button";

interface CardModuleProps {
    className?: string;
    imageSrc: string;
    imageDescription?: string;
    title: string;
    description: string;
    onBtnClick: () => void;
}

export const CardModule = ({ 
    className = '', 
    title, 
    description, 
    imageSrc, 
    onBtnClick 
}: CardModuleProps) => {
  return (
    <div className={className}>
        <div className="container mx-auto px-4">
            <div className="module-section rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Image */}
                    <div className="relative w-full md:w-[40%] h-[500px] flex-shrink-0 rounded-xl overflow-hidden">
                        <Image 
                            src={imageSrc} 
                            alt="Module 1 Diagnosis" 
                            fill // Sustituye a layout="fill"
                            className="object-cover" // Sustituye a objectFit="cover"
                            sizes="(max-width: 768px) 100vw, 443px"
                            priority
                        />
                    </div>
            
                    {/* Right side - Content */}
                    <div className="flex flex-col justify-center gap-6 p-6 md:p-8">
                        <div className="text-left">
                            <h2 className="title mb-6">
                                <span>{title}</span>
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.4]">
                                {description}
                            </p>
                        </div>
                        <div>
                            <Button onClick={onBtnClick}>Iniciar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};