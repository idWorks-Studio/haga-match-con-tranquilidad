import { Modal } from "../atoms/Modal";
import { YouTubeFrame } from "../molecules/YouTubeFrame";

export const YouTubePlayer = ({ isOpen, onClose, videoId }: { isOpen: boolean; onClose: () => void; videoId: string }) => {
    const handleAutoClose = () => {
        console.log("Video finalizado, cerrando modal...");
        // Opcional: añadir un pequeño delay para que no sea tan brusco
        setTimeout(() => {
            onClose();
        }, 1000); 
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-fit">
            <YouTubeFrame videoId={videoId} onVideoEnd={handleAutoClose} />
        </Modal>
    );
};