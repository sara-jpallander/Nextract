import styles from "./styles.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ApiPreviewModal: React.FC<ModalProps> = ({
  children,
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modaloverlay} onClick={onClose}>
      <div
        className={`${styles.modalcontent}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className={styles.closebutton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ApiPreviewModal;
