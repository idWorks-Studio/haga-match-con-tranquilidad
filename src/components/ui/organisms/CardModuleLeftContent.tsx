import Image from "next/image";
import { Button } from "../atoms/Button";

interface CardModuleLeftContentProps {
    imageSrc: string;
    imageDescription?: string;
    title: string;
    descriptionHtml: string;
}

export const CardModuleLeftContent = ({ title, descriptionHtml, imageSrc, imageDescription }: CardModuleLeftContentProps) => {
    return (
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-[#f8f8f8] bg-[url('/assets/images/texture-paper.png')] rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Left side - Content */}
                    <div className="flex flex-col justify-center gap-6 p-6 md:p-8">
                        <div className="text-left mb-6">
                            <p className="text-base text-gray-700 leading-[1.4]" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                        </div>
                        <div>
                            <Button>Iniciar</Button>
                        </div>
                    </div>
        
                    {/* Right side - Illustration */}
                    <div className="relative w-full md:w-[504px] h-[407px] flex-shrink-0 rounded-xl overflow-hidden">
                        <Image 
                            src={imageSrc}
                            alt={imageDescription || "Module Illustration"} 
                            fill // Sustituye a layout="fill"
                            className="object-cover" // Sustituye a objectFit="cover"
                            sizes="(max-width: 768px) 100vw, 443px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};