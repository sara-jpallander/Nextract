"use client";

import styles from "@/app/dashboard/api/api.module.css";

interface SaveConnectButtonsProps {
  isUpdateMode: boolean;
  onUpdate: () => void;
  onCancel?: () => void;
  onPreview?: () => void;
  onSave?: () => void;
  chosenKeysLength: number;
  apiUrl: string;
}

const SaveConnectButtons: React.FC<SaveConnectButtonsProps> = ({
  isUpdateMode,
  onUpdate,
  onCancel,
  onPreview,
  onSave,
  chosenKeysLength,
  apiUrl,
}) => {
  if (isUpdateMode) {
    return (
      <div className={styles.buttonContainer}>
        <button onClick={onUpdate} className={styles.buttonConnect}>
          Update
        </button>
        <button onClick={onCancel} className={styles.buttonSave}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className={styles.saveConnectButtonContainer}>
      <button
        className={styles.buttonConnect}
        onClick={onPreview}
        disabled={chosenKeysLength === 0}
      >
        Preview
      </button>
      <button
        className={styles.buttonSave}
        onClick={onSave}
        disabled={!(apiUrl && apiUrl.trim().length > 0 && chosenKeysLength > 0)}
      >
        Save
      </button>
    </div>
  );
};

export default SaveConnectButtons;
