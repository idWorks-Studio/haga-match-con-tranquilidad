import Image from "next/image";
import { Button } from "../atoms/Button";

interface CardModuleProps {
    className?: string;
    imageSrc: string;
    imageDescription?: string;
    title: string;
    description: string;
}

export const CardModule = ({ className = '', title, description, imageSrc }: CardModuleProps) => {
  return (
    <div className={`py-12 md:py-16 ${className}`}>
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-[#f8f8f8] bg-[url('/assets/images/texture-paper.png')] rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Image */}
                    <div className="relative w-full md:w-[443px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden">
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
                        <div className="text-left mb-6">
                            <h2 className="text-[#038450] text-2xl md:text-[28px] font-bold leading-[1.4] mb-6">
                                <span className="text-[#038450]">{title}</span>
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.4] max-w-md">
                                {description}
                            </p>
                            <div className="mt-4">
                                <Button>Iniciar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};