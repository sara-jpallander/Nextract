import { useSelectedProductsStore } from "@/lib/store";
import { useRef } from "react";
import styles from "@/app/dashboard/preview/styles.module.css";

export default function DownloadPreview() {
  const { selectedProducts } = useSelectedProductsStore();
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (!selectedProducts || selectedProducts.length === 0) {
      alert("No products selected");
      return;
    }

    const textContent = selectedProducts
      .map((object) => {
        return `<div>${Object.entries(object)
          .map(([key, value]) => `<p><b>${key}:</b> ${value}</p>`)
          .join("\n")}</div>`;
      })
      .join("\n\n");

    const blob = new Blob([textContent], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);

    if (downloadRef.current) {
      downloadRef.current.href = url;
      downloadRef.current.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);
      alert("Downloaded successfully");
    }
  };

  return (
    <div>
      <a
        ref={downloadRef}
        style={{ display: "none" }}
        download="selected_products.html"
      />
      <button className={styles.linkButton} onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}
