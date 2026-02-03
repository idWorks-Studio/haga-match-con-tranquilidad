"use client";

interface QuizPaginationProps {
  totalSteps: number;
  currentStep: number; // Índice de la pregunta activa (0 a n)
}

export const QuizPagination = ({ totalSteps, currentStep }: QuizPaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-3 py-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`circle-pagination rounded-full transition-colors duration-300 ${
            index === currentStep 
              ? "bg-[#038450]" // Verde para la activa
              : "bg-[#FFD966]" // Amarillo para el resto
          }`}
        />
      ))}
    </div>
  );
};