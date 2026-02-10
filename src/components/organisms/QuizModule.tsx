"use client";
import { useState } from "react";
import Image from "next/image";
import { MultipleChoiceGroup } from "../molecules/MultipleChoiceGroup";
import { QuizPagination } from "../molecules/QuizPagination";
import { DragAndDrop } from "../molecules/DragAndDrop";
import { QuizFeedbackModal } from "../atoms/QuizFeedbackModal";
import { Question } from "@/src/models/QuizModel";
import { Button } from "../atoms/Button";

interface QuizModuleProps {
    className?: string;
    preguntas: Question[];
    onFinish: () => void;
}

export const QuizModule = ({ className = "", preguntas, onFinish }: QuizModuleProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);

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
                setIsFinished(true);
            }
        } else {
            // Si es incorrecto, solo reinicia la selección actual
            setSelectedIds([]);
        }
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const handleFinishSection = () => {
        onFinish();
    };

    return (
        <div className={`${className}`}>    
            {!isFinished && (
            <div className="module-container module-section-bg relative shadow-lg min-h-[600px] flex flex-col">
                {/* Feedback Modal (Local a la sección) */}
                <QuizFeedbackModal
                    message={preguntaActual.mensajeExitoso}
                    isOpen={modalConfig.isOpen}
                    isCorrect={modalConfig.isCorrect}
                    onContinue={handleModalAction}
                />
                    
                {/* Header  */}
                <div className="module-quiz-title relative">
                    <p dangerouslySetInnerHTML={{ __html: preguntaActual.introduccion }}></p>
                </div>

                {/* Contenido Principal */}
                <div className="flex flex-col md:flex-row items-center justify-center p-2 gap-10">
                    {/* Personaje */}
                    <div className="quiz-figure relative">
                        <Image 
                            src={`/assets/images/modulo-2/${preguntaActual.id}.png`} 
                            alt="Personaje" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                    {/* Pregunta y Opciones */}
                    <div className="quiz-question-panel">
                        {preguntaActual.tipo === "drag-and-drop" ? (
                            <DragAndDrop 
                                currentStepData={preguntaActual}
                                selectedIds={selectedIds}
                                onSelectionChange={setSelectedIds}
                                onComplete={handleValidateAnswer} 
                            />
                        ) : (
                            <div className="quiz-question-inner">
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
                </div>

                {/* Footer con Paginación */}
                <footer className="flex justify-end">
                    <QuizPagination 
                        totalSteps={preguntas.length} 
                        currentStep={currentIndex}
                    />
                </footer>
            </div>
            )}

            {isFinished && (
            <div className="excelente relative module-container shadow-lg min-h-[600px] overflow-hidden">
                {/* Contenedor Principal: Eliminamos padding horizontal para que la imagen toque el borde */}
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-10">
                    
                    {/* Contenedor de Imagen: 
                        - 'hidden md:block' hace que no se vea en mobile y aparezca en desktop.
                        - 'relative' es necesario para el componente Image con 'fill'.
                    */}
                    <div className="hidden md:block relative w-[60%] min-h-[640px]">
                        <Image
                            src="/assets/images/excelente.png" 
                            alt="Personaje" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    
                    {/* Contenedor de Texto */}
                    <div className="flex flex-col justify-center items-start gap-6 p-8 md:p-12 w-full md:w-1/2">
                        <div className="text-left">
                            <h2 className="title-quiz-question mb-6">
                                ¡EXCELENTE!
                            </h2>
                            <p className="text-base text-gray-700 leading-[1.4] mr-0 md:mr-20 mb-4">
                                Usted ya sabe cómo administrar y tener mayor control sobre los riesgos.
                                <br /><br />
                                Lo invitamos a que continúe explorando el módulo 3, el cual le ayudará a elegir herramientas que le ayudarán a tener una vida más tranquila.
                            </p>
                        </div>
                        <div>
                            <Button onClick={handleFinishSection}>Continuar</Button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};
