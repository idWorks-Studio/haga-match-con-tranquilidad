"use client";
import { useEffect, useRef } from "react";

interface TikTokFrameProps {
  videoId: string;
  onVideoEnd?: () => void;
}

export const TikTokFrame = ({ videoId, onVideoEnd }: TikTokFrameProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Verificamos que el mensaje venga de TikTok
            if (event.data["x-tiktok-player"]) {
                // El evento "type: 4" suele corresponder al fin del video o cambios de estado
                // Pero la forma más segura es revisar el "value" si el player lo envía
                if (event.data.type === "ended" || event.data.value === "ended") {
                    if (onVideoEnd) onVideoEnd();
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [onVideoEnd]);

  return (
    <div className="flex flex-col items-center bg-black rounded-2xl overflow-hidden">
      {/* Contenedor del Iframe con el recorte para ocultar descripción si lo deseas */}
      <div className="w-[320px] md:w-[380px] aspect-[9/16] relative overflow-hidden bg-black">
        <iframe
          ref={iframeRef}
          src={`https://www.tiktok.com/player/v1/${videoId}?music_info=0&description=0`}
          className="absolute w-full h-[100%] -top-[-1%] border-0 block"
          allow="fullscreen; autoplay"
          title="TikTok Player"
          scrolling="no"
        />
      </div>
    </div>
  );
};