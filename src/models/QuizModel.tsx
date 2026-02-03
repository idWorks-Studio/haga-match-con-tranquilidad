export interface Option {
  id: string;
  texto: string;
}

export interface Question {
  id: string;
  introduccion: string;
  imagen: string;
  contexto: string;
  enunciado: string;
  tipo: "multiple-choice" | "drag-and-drop";
  opciones: Option[];
  numRespuestasCorrectas: number;
  respuestasCorrectas: string[];
  mensajeExitoso?: string;
}