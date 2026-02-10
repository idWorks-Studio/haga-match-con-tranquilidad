"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Modal } from "../atoms/Modal";
import { ScormFrame } from "../molecules/ScormFrame";

export const ScormPlayer = ({ isOpen, onClose, scormUrl, onFinish }: any) => {
  const scormData = useRef<Record<string, string>>({});
  const latestResult = useRef<string | null>(null);
  const onFinishRef = useRef(onFinish);
  const [isApiReady, setIsApiReady] = useState(false);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const syncToParent = useCallback(() => {
    // Sacamos una foto actual de TODO lo que haya en scormData
    const data = scormData.current;
    console.log("%c[ESTADO ACTUAL DEL SCORM]:", "color: yellow", data);

    const suspendData = data["cmi.suspend_data"] || "";

    // Intentamos deducir el resultado aunque el curso no lo diga explícitamente
    const detectedResult = latestResult.current;

    // Enviamos lo que tengamos, no esperemos a que 'completed' sea true
    onFinishRef.current({
      score: Number(data["cmi.score.raw"]) || 0,
      suspendData: suspendData,
      // @ts-ignore (agregamos el campo result para Module1Section)
      result: detectedResult
    });
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsApiReady(false);
      return;
    }

    // 🚩 CONFIGURACIÓN DE EMERGENCIA
    const api = {
      Initialize: () => "true",
      Terminate: () => {
        syncToParent();
        return "true";
      },
      GetValue: (key: string) => scormData.current[key] || "",
      SetValue: (key: string, value: string) => {
        // LOG AGRESIVO: Si esto no sale en consola, el curso NO está conectado
        console.log(`%c > SCORM RECIBIDO: ${key} = ${value}`, "color: #00ff00; background: #222");
        scormData.current[key] = value;
        return "true";
      },
      Commit: () => {
        syncToParent();
        return "true";
      },
      GetLastError: () => "0",
      GetErrorString: () => "NoError",
      GetDiagnostic: () => "OK"
    };

    // Inyectamos en todos los lugares posibles
    (window as any).API_1484_11 = api;
    // @ts-ignore
    if (typeof window !== "undefined") window.top.API_1484_11 = api;

    // Pequeño truco: Storyline a veces tarda en buscar. 
    // Le damos 500ms de ventaja a la API antes de mostrar el Iframe.
    const timer = setTimeout(() => setIsApiReady(true), 500);

    const handleWindowClose = () => {
      syncToParent();
    };

    window.addEventListener("beforeunload", handleWindowClose);

    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || data.tipo !== "calificacion") return;

      const raw = typeof data.valor === "string" ? data.valor : "";
      const normalized = raw.trim();
      if (normalized) {
        latestResult.current = normalized;
        // Enviamos inmediatamente el resultado al padre
        onFinishRef.current({
          score: Number(scormData.current["cmi.score.raw"]) || 0,
          suspendData: scormData.current["cmi.suspend_data"] || "",
          // @ts-ignore (agregamos el campo result para Module1Section)
          result: normalized
        });
      }
    };

    window.addEventListener("message", handleMessage);

    // Sobrescribir window.close
    const originalClose = window.close;
    window.close = () => {
      syncToParent();
      onClose();
    };

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleWindowClose);
      window.removeEventListener("message", handleMessage);
      window.close = originalClose;
      delete (window as any).API_1484_11;
      scormData.current = {};
      latestResult.current = null;
    };
  }, [isOpen, onClose, syncToParent]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl w-full">
      {isApiReady ? (
        <ScormFrame src={scormUrl} />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-[#038450] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 italic">Estableciendo conexión con el curso...</p>
        </div>
      )}
    </Modal>
  );
};
