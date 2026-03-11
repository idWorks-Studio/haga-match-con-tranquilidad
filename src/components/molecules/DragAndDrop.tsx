"use client";
import { DraggableOption } from "../atoms/DraggableOption";
import { DropZone } from "../atoms/DropZone";
import { Question, Option } from "@/src/models/QuizModel";

interface DragAndDropProps {
  currentStepData: Question;
  selectedIds: string[]; 
  onSelectionChange: (ids: string[]) => void;
  onComplete: (finalSelection: string[]) => void;
}

export const DragAndDrop = ({ 
    currentStepData, 
    selectedIds,
    onSelectionChange,
    onComplete 
}: DragAndDropProps) => {
  
  // 1. DERIVAMOS el ID en lugar de usar un estado espejo.
  // Si selectedIds está vacío (reinicio), droppedOptionId será null automáticamente.
  const droppedOptionId = selectedIds.length > 0 ? selectedIds[0] : null;

  const handleDrop = (id: string) => {
    // 2. Notificamos al padre directamente. 
    // Al actualizarse selectedIds en el padre, este componente se re-renderiza
    // y droppedOptionId se actualiza solo.
    onSelectionChange([id]); 
    onComplete([id]); 
  };

  const parts = currentStepData.enunciado.split("_");

  return (
    <div className="quiz-dnd">
      <div className="quiz-dnd-options">
        <p className="quiz-dnd-context">{currentStepData.contexto}</p>
        <div className="quiz-dnd-pill-group">
          {currentStepData.opciones.map((opt: Option) => (
            <DraggableOption key={opt.id} id={opt.id} text={opt.texto} />
          ))}
        </div>
      </div>

      <div className="quiz-dnd-sentence">
        <p>{parts[0]}</p>
        <DropZone
          onOptionDrop={handleDrop}
          droppedText={currentStepData.opciones.find((o: Option) => o.id === droppedOptionId)?.texto}
        />
        <p>{parts[1]}</p>
      </div>
    </div>
  );
};
