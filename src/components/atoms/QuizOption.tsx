"use client";

interface QuizOptionProps {
  id: string;
  text: string;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const QuizOption = ({ id, text, isSelected, onToggle }: QuizOptionProps) => {
  return (
    <button
      onClick={() => onToggle(id)}
      className={`btn-quiz rounded-full transition-all duration-300 border-2 
        ${isSelected 
          ? "bg-[#038450] text-white border-[#038450] shadow-md" 
          : "bg-[#FFD966] text-[#038450] border-transparent hover:bg-[#ffcc33]"
        }`}
    >
      {text}
    </button>
  );
};
