"use client";
import Image from "next/image";
import { Button } from "../atoms/Button";

interface CardModuleProps {
    className?: string;
    imageSrc: string;
    title: string;
    title_section: string;
    description: string;
    onBtnClick: () => void;
}

export const CardModule = ({ 
    className = '', 
    title, 
    title_section,
    description, 
    imageSrc, 
    onBtnClick 
}: CardModuleProps) => {
  return (
    <div className={className}>
        <div className="module-container module-section-bg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Left side - Image */}
                    <div className="relative w-full md:w-[487] h-[330px] flex-shrink-0">
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
                            <p className="mb-4">
                                <span className="module-title">{title_section}</span>
                            </p>
                            <h2 className="title mb-4">
                                <span>{title}</span>
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.4] mr-0 md:mr-20 mb-4">
                                {description}
                            </p>
                            <p>
                                <span className="module-title">5 Min</span>
                            </p>
                        </div>
                        <div>
                            <Button onClick={onBtnClick}>Iniciar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};