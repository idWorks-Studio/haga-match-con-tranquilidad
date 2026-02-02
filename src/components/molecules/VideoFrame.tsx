"use client";
import { useRef, useEffect } from "react";

interface VideoFrameProps {
  src: string;
  onVideoEnd?: () => void;
  autoPlay?: boolean;
}

export const VideoFrame = ({ src, onVideoEnd, autoPlay = true }: VideoFrameProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        src={src}
        controls
        autoPlay={autoPlay}
        className="w-full h-full object-contain"
        onEnded={onVideoEnd}
      >
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};