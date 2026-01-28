"use client";

import { Button } from "./Button";

interface FeedbackModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  onContinue: () => void;
}

export const QuizFeedbackModal = ({ isOpen, isCorrect, onContinue }: FeedbackModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 rounded-2xl">
      <div className="bg-paper-yellow relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">

        <div className="p-10 text-center flex flex-col items-center">
          <h2 className="text-[#038450] text-4xl font-bold mb-4">
            {isCorrect ? "¡Muy Bien!" : "¡Inténtalo de nuevo!"}
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            {isCorrect 
              ? "Has respondido correctamente. ¡Sigue así para asegurar tu tranquilidad!" 
              : "Parece que algunas opciones no son las correctas. Revisa la situación y vuelve a intentarlo."}
          </p>
          
          <Button onClick={onContinue}>
            {isCorrect ? "Continuar" : "Reintentar"}
          </Button>
        </div>
      </div>
    </div>
  );
};