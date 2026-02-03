"use client";

interface DraggableOptionProps {
  id: string;
  text: string;
}

export const DraggableOption = ({ id, text }: DraggableOptionProps) => {
  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("optionId", id); // Guardamos el ID de la opción arrastrada
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="btn-quiz min-w-[270px] bg-[#FFD966] text-[#038450] rounded-full cursor-grab active:cursor-grabbing shadow-sm hover:bg-[#ffcc33] transition-colors"
    >
      {text}
    </div>
  );
};