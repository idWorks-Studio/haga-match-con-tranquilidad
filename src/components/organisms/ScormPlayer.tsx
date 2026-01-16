"use client";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../atoms/Modal";
import { ScormFrame } from "../molecules/ScormFrame";

declare global {
  interface Window {
    API_1484_11?: unknown;
  }
}

interface ScormPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  scormUrl: string;
  onFinish: (data: {
    score?: number;
    completed?: boolean;
    passed?: boolean;
    suspendData?: string;
  }) => void;
}

export const ScormPlayer = ({
  isOpen,
  onClose,
  scormUrl,
  onFinish,
}: ScormPlayerProps) => {
  const scormData = useRef<Record<string, string>>({});
  const finished = useRef(false);

  // 👉 Storyline espera strings
  const OK = "true";
  const NO_ERROR = "0";

  const evaluateCompletion = () => {
    if (finished.current) return;

    const completion = scormData.current["cmi.completion_status"];
    const success = scormData.current["cmi.success_status"];

    const completed = completion === "completed";
    const passed = success === "passed";

    if (completed || passed) {
      finished.current = true;

      onFinish({
        score: Number(scormData.current["cmi.score.raw"]),
        completed,
        passed,
        suspendData: scormData.current["cmi.suspend_data"],
      });

      setTimeout(onClose, 800);
    }
  };

  const api2004 = {
    Initialize: () => OK,
    Terminate: () => {
      evaluateCompletion();
      return OK;
    },
    Commit: () => OK,

    GetValue: (key: string) => {
      return scormData.current[key] ?? "";
    },

    SetValue: (key: string, value: string) => {
      console.log("SCORM SET:", key, value);
      scormData.current[key] = value;

      if (key === "cmi.suspend_data") {
        onFinish({ suspendData: value });
      }

      evaluateCompletion();
      return OK;
    },

    GetLastError: () => NO_ERROR,
    GetErrorString: () => "No error",
    GetDiagnostic: () => "OK",
  };

  useEffect(() => {
    if (!isOpen) return;

    // 👉 EXPONER API ANTES DEL IFRAME
    window.API_1484_11 = api2004;
    window.top!.API_1484_11 = api2004;

    console.log("SCORM 2004: API ready");

    return () => {
      delete window.API_1484_11;
      scormData.current = {};
      finished.current = false;
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl w-full">
      {/* ⚠️ IFRAME SOLO CUANDO API EXISTE */}
      {isOpen && <ScormFrame src={scormUrl} />}
    </Modal>
  );

};
