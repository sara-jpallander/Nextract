"use client";

import styles from "../../app/dashboard/api/api.module.css";

type SaveApiModalProps = {
  apiName: string;
  setApiName: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
};

const saveApiModal: React.FC<SaveApiModalProps> = ({
  apiName,
  setApiName,
  onSave,
  onClose,
}) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <label>Please name your API</label>
        <input
          type="text"
          value={apiName}
          onChange={(e) => {
            setApiName(e.target.value);
          }}
        />
        <button className={styles.buttonSave} onClick={onSave}>
          Save
        </button>
        <button className={styles.closebutton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default saveApiModal;
