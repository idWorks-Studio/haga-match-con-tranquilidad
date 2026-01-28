"use client";
import { QuizOption } from "../atoms/QuizOption";
import { Option } from "@/src/models/QuizModel";

interface MultipleChoiceGroupProps {
  options: Option[];
  selectedIds: string[];
  maxSelections: number;
  onSelectionChange: (ids: string[]) => void;
  onComplete: (finalSelection: string[]) => void;
}

export const MultipleChoiceGroup = ({ 
  options, 
  selectedIds, 
  maxSelections, 
  onSelectionChange,
  onComplete
}: MultipleChoiceGroupProps) => {
  
  const handleToggle = (id: string) => {
    let newSelection = [...selectedIds];

    if (selectedIds.includes(id)) {
      newSelection = selectedIds.filter(item => item !== id);
    } else if (selectedIds.length < maxSelections) {
      newSelection = [...selectedIds, id];
    }

    onSelectionChange(newSelection);

    // Si acaba de completar el número de respuestas requeridas
    if (newSelection.length === maxSelections) {
      // Pasamos newSelection directamente para que el Organismo valide
      // y abra el modal con el resultado correcto o incorrecto
      onComplete(newSelection); 
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-xl">
      {options.map((opt) => (
        <QuizOption
          key={opt.id}
          id={opt.id}
          text={opt.texto}
          isSelected={selectedIds.includes(opt.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};