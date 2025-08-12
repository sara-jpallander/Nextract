"use client";
import "../../app/globals.css";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Nextract-logo.svg";
import { LogoutBtn } from "../LogoutButton/logoutBtn";

import {
  MdOutlineSpaceDashboard,
  MdOutlineContactSupport,
  MdOutlineBallot,
  MdOutlineSettings,
  MdCode,
} from "react-icons/md";

export default function AsideNav() {
  return (
    <>
      <ul className={styles.asideNav}>
        <Image className={styles.NextLogo} src={logo} alt="Nextract logo" />
        <Link href="/dashboard">
          <li key="dashboard">
            <MdOutlineSpaceDashboard style={{ fontSize: "25px" }} />
            <p>Dashboard</p>
          </li>
        </Link>
        <Link href="/dashboard/api">
          <li key="api">
            <MdCode style={{ fontSize: "25px" }} />
            <p>API</p>
          </li>
        </Link>
        <Link href="/dashboard/products">
          <li key="products">
            <MdOutlineBallot style={{ fontSize: "25px" }} />
            <p>Products</p>
          </li>
        </Link>
        <Link href="/dashboard/settings">
          <li key="settings">
            <MdOutlineSettings style={{ fontSize: "25px" }} />
            <p>Settings</p>
          </li>
        </Link>
        <Link href="/dashboard/support">
          <li key="support">
            <MdOutlineContactSupport style={{ fontSize: "25px" }} />
            <p>Support</p>
          </li>
        </Link>
        <li>
          <LogoutBtn />
        </li>
      </ul>
    </>
  );
}
