"use client";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: 'video' | 'scorm' | 'tiktok';
}

export const Modal = ({ isOpen, onClose, children, variant = 'scorm' }: ModalProps) => {
  if (!isOpen) return null;

  const configs = {
    tiktok: "max-w-[380px] aspect-[9/16]",
    video:  "max-w-5xl aspect-video",
    scorm:  "max-w-6xl h-[85vh]"
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className={`relative w-full ${configs[variant]} overflow-hidden rounded-3xl bg-transparent`}>
        
        {/* Botón cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-[110] p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
        >
          <X size={20} />
        </button>

        {/* Contenido sin padding */}
        <div className="w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
