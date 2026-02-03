"use client";
import { useState } from "react";

interface DropZoneProps {
  onOptionDrop: (id: string) => void;
  droppedText?: string;
}

export const DropZone = ({ onOptionDrop, droppedText }: DropZoneProps) => {
  const [isOver, setIsOver] = useState(false);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necesario para permitir el drop
    setIsOver(true);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);
    const id = e.dataTransfer.getData("optionId");
    onOptionDrop(id);
  };

  return (  
    <div
      onDragOver={onDragOver}
      onDragLeave={() => setIsOver(false)}
      onDrop={onDrop}
      className={`drop-opt inline-block min-w-[200px] rounded-full transition-all border-2 
        ${droppedText ? "bg-[#038450] text-white border-[#038450]" : "bg-gray-300 border-transparent"}
        ${isOver && !droppedText ? "scale-105 border-dashed border-[#038450]" : ""}
      `}
    >
      <span className="flex items-center justify-center h-full text-sm font-bold px-4">
        {droppedText || ""}
      </span>
    </div>
  );
};