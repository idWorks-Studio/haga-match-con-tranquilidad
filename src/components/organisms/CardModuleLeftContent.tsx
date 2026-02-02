import Image from "next/image";
import { Button } from "../atoms/Button";

interface CardModuleLeftContentProps {
    className?: string;
    imageSrc: string;
    title: string;
    description: string;
    onStart: (() => void);
}

export const CardModuleLeftContent = ({ 
    className = '', 
    title, 
    description, 
    imageSrc, 
    onStart 
}: CardModuleLeftContentProps) => {
    return (
        <div className={`${className}`}>
            <div className="module-container module-section-bg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row min-h-[450px]">    
                    
                    {/* Left side - Content */}
                    <div className="flex flex-col justify-center gap-6 p-6 md:p-12 flex-1">
                        <div className="text-left">
                            <h2 className="title mb-6">
                                <span>{title}</span>
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.4]">
                                { description }
                            </p>
                        </div>
                        <div>
                            <Button onClick={onStart}>Iniciar</Button>
                        </div>
                    </div>
            
                    {/* Lado Derecho - Ilustración */}
                    <div className="relative w-full md:w-[500px] h-[535px] md:h-auto flex-shrink-0 overflow-hidden">
                        <Image src={imageSrc} fill className="object-cover" alt="Illustration" />
                    </div>
            
                </div>
            </div>
        </div>
    );
};