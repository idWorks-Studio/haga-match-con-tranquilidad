import { Modal } from "../atoms/Modal";

export const TikTokPlayer = ({ isOpen, onClose, videoId }: { isOpen: boolean; onClose: () => void; videoId: string }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="tiktok">
      <div className="w-full h-full bg-black flex items-center justify-center">
        <iframe
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          title="TikTok Video Player"
        />
      </div>
    </Modal>
  );
};