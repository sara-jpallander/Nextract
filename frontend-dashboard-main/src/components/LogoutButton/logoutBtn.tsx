import React from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Cookies from "js-cookie";

import { MdOutlineLogout } from "react-icons/md";

export const LogoutBtn: React.FC = () => {
  const router = useRouter();
  const onLogout = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    router.push("/");
  };
  return (
    <button className={styles.logoutButton} onClick={onLogout}>
      <MdOutlineLogout style={{ fontSize: "25px" }} />
      Log out
    </button>
  );
};
