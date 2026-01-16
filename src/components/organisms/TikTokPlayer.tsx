import { Modal } from "../atoms/Modal";
import { TikTokFrame } from "../molecules/TikTokFrame";

export const TikTokPlayer = ({ isOpen, onClose, videoId }: { isOpen: boolean; onClose: () => void; videoId: string }) => {
    const handleAutoClose = () => {
        console.log("Video finalizado, cerrando modal...");
        // Opcional: añadir un pequeño delay para que no sea tan brusco
        setTimeout(() => {
            onClose();
        }, 1000); 
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-fit">
            <TikTokFrame videoId={videoId} onVideoEnd={handleAutoClose} />
        </Modal>
    );
};