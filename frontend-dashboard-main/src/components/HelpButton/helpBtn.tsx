import React from "react";
import styles from "./styles.module.css";

interface HelpButtonProps {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const HelpButton = ({ title, onClick, isDisabled }: HelpButtonProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: isDisabled ? "default" : "pointer",
      }}
      className={!isDisabled ? styles.helpIcon : styles.disabled}
      title={title}
    >
      ?
    </div>
  );
};
