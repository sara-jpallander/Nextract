"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Settings() {
  const [name, setName] = useState("User");

  useEffect(() => {
    const rawCookie = Cookies.get("userData");
    if (!rawCookie) {
      console.error("User cookie not found");
      return;
    }

    setName(
      JSON.parse(rawCookie).company
        ? JSON.parse(rawCookie).company.charAt(0).toUpperCase() +
            JSON.parse(rawCookie).company.slice(1)
        : "you whitout a name"
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <div className={styles.div}>
          <h2 className={styles.h2}>Language</h2>
          <select className={styles.select} name="" id="">
            <option value="English">English</option>
          </select>
        </div>

        <div className={styles.div}>
          <h2 className={styles.h2}>Profile</h2>
          <div className={styles.change}>
            <input
              className={styles.input + " " + styles.name}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button>Change</button>
          </div>
        </div>

        <div className={styles.div}>
          <h2 className={styles.h2}>Preferences</h2>
          <div className={styles.preferences}>
            <p>Email notifications </p>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
      </div>
      <button className={styles.button}>Save settings</button>
    </div>
  );
}
