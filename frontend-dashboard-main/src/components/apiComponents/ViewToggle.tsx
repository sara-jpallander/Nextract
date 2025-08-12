"use client";
import styles from "@/app/dashboard/api/api.module.css";

interface ViewToggleProps {
  toggleJson: boolean;
  setToggleJson: (val: boolean) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({
  toggleJson,
  setToggleJson,
}) => {
  return (
    <div className={styles.buttoncontainer}>
      <button
        className={!toggleJson ? styles.activeLeft : styles.inactive}
        onClick={() => {
          setToggleJson(false);
        }}
      >
        Simple view
      </button>
      <button
        className={toggleJson ? styles.activeRight : styles.inactive}
        onClick={() => {
          setToggleJson(true);
        }}
      >
        Advanced view
      </button>
    </div>
  );
};

export default ViewToggle;
