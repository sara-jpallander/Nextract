import { FC } from "react";
import styles from "./confirmationmodal.module.css";

interface ConfirmationModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onClose: () => void; // Lägg till en onClose-prop
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  message,
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.confirmationMessage}>
          <p>{message}</p>
          <div>
            <button onClick={onConfirm}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
