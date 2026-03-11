"use client";
import { useEffect, useState } from "react";
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
    const [wasCompleted, setWasCompleted] = useState(false);

    useEffect(() => {
        const updateCompletion = () => {
            const completed = typeof window !== "undefined" && sessionStorage.getItem("modulo2") === "success";
            setWasCompleted(completed);
            if (completed) {
                setIsFinished(true);
            }
        };

        updateCompletion();
        window.addEventListener("modules-progress-updated", updateCompletion);
        window.addEventListener("storage", updateCompletion);

        return () => {
            window.removeEventListener("modules-progress-updated", updateCompletion);
            window.removeEventListener("storage", updateCompletion);
        };
    }, []);

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        isCorrect: false
    });

    const preguntaActual = preguntas[currentIndex] as Question;
    const hasImage = Boolean(preguntaActual.imagen);
    const showSuccess = isFinished || wasCompleted;

    const handleValidateAnswer = (respuestasUsuario: string[]) => {
        const correctas = preguntaActual.respuestasCorrectas;

        const esCorrecta =
            respuestasUsuario.length === correctas.length &&
            respuestasUsuario.every(id => correctas.includes(id));

        setModalConfig({ isOpen: true, isCorrect: esCorrecta });
    };

    const handleModalAction = () => {
        if (modalConfig.isCorrect) {
            if (currentIndex < preguntas.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setSelectedIds([]);
            } else {
                setIsFinished(true);
            }
        } else {
            setSelectedIds([]);
        }

        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    const handleFinishSection = () => {
        onFinish();
    };

    return (
        <div className={className}>
            <div className="grid">
                <div
                    aria-hidden={showSuccess}
                    className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${showSuccess
                            ? "opacity-0 translate-y-3 pointer-events-none"
                            : "opacity-100 translate-y-0"
                        }`}
                >
                    <div className="module-container module-section-bg relative shadow-lg h-auto md:h-[550px] flex flex-col overflow-hidden">
                        <QuizFeedbackModal
                            message={preguntaActual.mensajeExitoso}
                            isOpen={modalConfig.isOpen}
                            isCorrect={modalConfig.isCorrect}
                            onContinue={handleModalAction}
                        />

                        <div className="module-quiz-title relative">
                            <p dangerouslySetInnerHTML={{ __html: preguntaActual.introduccion }}></p>
                        </div>

                        <div
                            className={`flex flex-1 flex-col items-center justify-center p-2 min-h-0 ${
                                hasImage ? "md:flex-row md:gap-10" : "md:flex-col md:gap-6"
                            }`}
                        >
                            {hasImage && (
                                <div className={`${preguntaActual.tipo === "drag-and-drop" ? "quiz-figure-drop" : "quiz-figure"} relative`}>
                                    <Image
                                        src={preguntaActual.imagen}
                                        alt="Personaje"
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>
                            )}

                            {preguntaActual.tipo === "drag-and-drop" ? (
                                <div className="quiz-question-panel quiz-question-panel--drag">
                                    <DragAndDrop
                                        currentStepData={preguntaActual}
                                        selectedIds={selectedIds}
                                        onSelectionChange={setSelectedIds}
                                        onComplete={handleValidateAnswer}
                                    />
                                </div>
                            ) : (
                                <div className="quiz-question-panel">
                                    <div className="quiz-question-inner">
                                        <div className="text-left md:w-[447px]">
                                            <h2 className="title-quiz-question">
                                                {preguntaActual.enunciado}
                                            </h2>
                                            <p className="text-black leading-[1.4] mb-4">
                                                {preguntaActual.contexto}
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
                                </div>
                            )}
                        </div>

                        <footer className="mt-auto flex justify-end">
                            <QuizPagination
                                totalSteps={preguntas.length}
                                currentStep={currentIndex}
                            />
                        </footer>
                    </div>
                </div>

                <div
                    aria-hidden={!showSuccess}
                    className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${showSuccess
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-3 pointer-events-none"
                        }`}
                >
                    <div className="excelente relative module-container module-section-bg shadow-lg h-auto md:h-[550px] overflow-hidden">
                        <div className="flex flex-col md:flex-row items-stretch justify-center h-full gap-0 md:gap-10">
                            <div className="hidden md:block relative w-[55%] h-full">
                                <Image
                                    src="/assets/images/excelente.png"
                                    alt="Personaje"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>

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
                </div>
            </div>
        </div>
    );
};
