"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ChatWindow from "./chatWindow";
import knut from "@/public/knaut.svg";

export default function ChatBtn() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button className={styles.chatBtn} onClick={() => setClicked(true)}>
        <Image src={knut} alt="knaut" className={styles.DataKnut} />
      </button>

      {clicked && (
        <ChatWindow onClose={() => setClicked(false)} sessionId={null} />
      )}
    </>
  );
}
