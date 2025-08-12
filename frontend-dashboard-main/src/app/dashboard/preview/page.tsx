"use client";

import Link from "next/link";

import { PreviewContainer } from "@/components/preview/PreviewContainer";
import styles from "./styles.module.css";
import DownloadPreview from "@/components/preview/downloadPreview/downloadpreview";

export default function FinishedAPIpreviewContainer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PreviewContainer />
      <div className="flex flex-row gap-4">
        <button className={styles.linkButton}>
          <Link href="/dashboard/products">Back to products</Link>
        </button>
        <DownloadPreview />
      </div>
    </div>
  );
}
