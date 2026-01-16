"use client";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; 
}

export const Modal = ({ isOpen, onClose, children, maxWidth = "w-fit h-fit" }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      {/* Eliminamos el max-w-5xl fijo para que maxWidth controle todo */}
      <div className={`relative overflow-hidden rounded-3xl bg-black shadow-2xl ${maxWidth}`}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-[110] p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all border border-white/10"
        >
          <X size={18} />
        </button>

        {/* Contenido sin padding ni aspect-video forzado */}
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};