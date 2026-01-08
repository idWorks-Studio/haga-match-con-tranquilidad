import React from 'react';

export interface VideoDescriptionProps {
  className?: string;
}

export const VideoDescription: React.FC<VideoDescriptionProps> = ({ className = '' }) => {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-base text-gray-700 text-center leading-[1.4]">
          En el video anterior Jorge supo administrar el riesgo y evitar un impacto mayor en su cultivo, incrementando así las probabilidades de cumplir sus sueños
        </p>
      </div>
    </section>
  );
};

