"use client";

import styles from "@/app/dashboard/api/api.module.css";

interface KeyListProps {
  keyName: string;
  index: number;
  onToggle: (keyName: string) => void;
}

export const KeyList = ({ keyName, index, onToggle }: KeyListProps) => {
  return (
    <div className={styles.keyListItem} key={index}>
      <p>{keyName}</p>

      {/* <input type="text" placeholder="Own key name" /> */}
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="use"
          name="published"
          value="use"
          onChange={() => onToggle(keyName)}
        />
      </div>
    </div>
  );
};
