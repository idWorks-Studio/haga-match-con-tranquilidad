"use client";
import { useState } from "react";
import Image from "next/image";
import { MultipleChoiceGroup } from "../molecules/MultipleChoiceGroup";
import { QuizPagination } from "../molecules/QuizPagination";
import { DragAndDrop } from "../molecules/DragAndDrop";
import { QuizFeedbackModal } from "../atoms/QuizFeedbackModal";
import { Question } from "@/src/models/QuizModel";

interface QuizModuleProps {
    className?: string;
    preguntas: Question[];
}

export const QuizModule = ({ className = "", preguntas }: QuizModuleProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    // Estado para controlar el Modal
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        isCorrect: false
    });

    const preguntaActual = preguntas[currentIndex] as Question;

    // Validación de respuesta
    const handleValidateAnswer = (respuestasUsuario: string[]) => {
        const correctas = preguntaActual.respuestasCorrectas;
        
        // Comparamos si los arrays coinciden
        const esCorrecta = respuestasUsuario.length === correctas.length && 
                           respuestasUsuario.every(id => correctas.includes(id));

        setModalConfig({ isOpen: true, isCorrect: esCorrecta });
    };

    const handleModalAction = () => {
        if (modalConfig.isCorrect) {
            // Si es correcto, avanzar
            if (currentIndex < preguntas.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setSelectedIds([]); // Limpia la selección para la siguiente
            } else {
                console.log("Cuestionario Finalizado");
            }
        } else {
            // Si es incorrecto, solo reinicia la selección actual
            setSelectedIds([]);
        }
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    return (
        <div className={`${className}`}>    
            <div className="module-container module-section-bg relative shadow-lg">
                {/* Feedback Modal (Local a la sección) */}
                <QuizFeedbackModal
                    message={preguntaActual.mensajeExitoso}
                    isOpen={modalConfig.isOpen}
                    isCorrect={modalConfig.isCorrect}
                    onContinue={handleModalAction}
                />
                    
                {/* Header  */}
                <div className="module-quiz-title relative rounded-t-lg">
                    <p dangerouslySetInnerHTML={{ __html: preguntaActual.introduccion }}></p>
                </div>

                {/* Contenido Principal */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
                    {/* Personaje */}
                    <div className="relative w-64 h-80 md:w-80 md:h-[300px]">
                        <Image 
                            src={`/assets/images/modulo-2/${preguntaActual.id}.png`} 
                            alt="Personaje" 
                            fill 
                            className="object-contain" 
                        />
                    </div>

                        {/* Pregunta y Opciones */}
                        {preguntaActual.tipo === "drag-and-drop" ? (
                            <DragAndDrop 
                                currentStepData={preguntaActual}
                                selectedIds={selectedIds}
                                onSelectionChange={setSelectedIds}
                                onComplete={handleValidateAnswer} 
                            />
                        ) : (
                            <div className="flex-1 max-w-2xl">
                                <div className="text-left">
                                    <h2 className="title-quiz-question">
                                        { preguntaActual.enunciado }
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        { preguntaActual.contexto }
                                    </p>
                                </div>
                                <MultipleChoiceGroup    
                                    options={preguntaActual.opciones}
                                    selectedIds={selectedIds}
                                    maxSelections={preguntaActual.numRespuestasCorrectas}
                                    onSelectionChange={setSelectedIds}
                                    onComplete={handleValidateAnswer}
                                />
                            </div>
                        )} 
                </div>

                {/* Footer con Paginación */}
                <footer className="quiz-footer-container">
                    <QuizPagination 
                        totalSteps={preguntas.length} 
                        currentStep={currentIndex}
                    />
                </footer>
            </div>
        </div>
    );
};