"use client";
import { useEffect } from "react";
import { Modal } from "../atoms/Modal";
import { ScormFrame } from "../molecules/ScormFrame";

type ScormAPI = {
  LMSInitialize: () => string;
  LMSGetValue: (element: string) => string;
  LMSSetValue: (element: string, value: string) => string;
  LMSFinish: () => string;
  LMSCommit: () => string;
  LMSGetLastError: () => string;
};

declare global {
  interface Window {
    API?: ScormAPI;
  }
}

interface ScormPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  scormUrl: string;
  onFinish: (data: { type: string; value: string }) => void; // <--- Nueva prop para reportar el resultado
}

export const ScormPlayer = ({ isOpen, onClose, scormUrl, onFinish }: ScormPlayerProps) => {
  useEffect(() => {
    if (isOpen) {
      window.API = {
        LMSInitialize: () => "true",
        LMSCommit: () => "true",
        LMSFinish: () => "true",
        LMSGetValue: (element: string) => "",
        LMSSetValue: (element: string, value: string) => {
          // 1. Capturar el puntaje de la encuesta
          if (element === "cmi.core.score.raw" || element === "cmi.score.raw") {
            onFinish({ type: 'score', value: value });
          }

          // 2. Capturar si terminó (aunque no tenga puntaje)
          if (element === "cmi.core.lesson_status" || element === "cmi.completion_status") {
            if (value === "completed" || value === "passed") {
              onFinish({ type: 'status', value: 'completado' });
              // Cerramos el modal tras un breve delay para que Storyline termine de procesar
              setTimeout(() => {
                onClose()
              }, 1000);
            }
          }
          return "true";
        },
        LMSGetLastError: () => "0",
      };
    }
  }, [isOpen, onClose, onFinish]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl w-full">
      <ScormFrame src={scormUrl} />
    </Modal>
  );
};

