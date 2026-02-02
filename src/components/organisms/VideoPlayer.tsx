"use client";
import { Modal } from "../atoms/Modal";
import { VideoFrame } from "../molecules/VideoFrame";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  autoClose?: boolean;
}

export const VideoPlayer = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  autoClose = false 
}: VideoPlayerProps) => {

  const handleVideoEnd = () => {
    console.log("Video estático finalizado");
    if (autoClose) {
      setTimeout(() => {
        onClose();
      }, 1000); // Pequeño delay como en TikTokPlayer
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl w-full">
      <div className="rounded-lg"> {/* Borde institucional opcional */}
        <VideoFrame 
          src={videoUrl} 
          onVideoEnd={handleVideoEnd} 
        />
      </div>
    </Modal>
  );
};