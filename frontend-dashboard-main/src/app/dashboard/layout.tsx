"use client";
export const dynamic = "force-dynamic";

import styles from "./styles.module.css";
import AsideNav from "@/components/layout/AsideNav";
import Header from "@/components/layout/Header";
import ChatBtn from "@/components/chatBtn/chatBtn";

import { Suspense } from "react";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className={styles.dashboardContainer}>
        <AsideNav />
        <div className={styles.dashboardContainerRight}>
          <Header />
          {children}
        </div>
        <ChatBtn />
      </div>
    </Suspense>
  );
}
