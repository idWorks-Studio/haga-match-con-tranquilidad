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
    <div className="flex-1 items-center py-6 px-4 md:px-24 bg-white rounded-3xl">
      <div className="flex flex-col gap-4 mb-10">
        <p className="text-center mb-2">{currentStepData.contexto}</p>
        <div className="flex flex-wrap justify-center gap-3">
            {currentStepData.opciones.map((opt: Option) => (
                <DraggableOption key={opt.id} id={opt.id} text={opt.texto} />
            ))}
        </div>
      </div>

      <div className="text-center flex flex-wrap items-center justify-center gap-2">
        <p>{parts[0]}</p>
        <br />
        <DropZone 
          onOptionDrop={handleDrop} 
          droppedText={currentStepData.opciones.find((o: Option) => o.id === droppedOptionId)?.texto} 
        />
        <br />
        <p>{parts[1]}</p>
      </div>
    </div>
  );
};