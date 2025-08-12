/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./style.module.css";
import { useSelectedProductsStore } from "@/lib/store";
import Image from "next/image";
import placeholder from "@/public/preview_img.png";

export const PreviewContainer = () => {
  const { selectedProducts } = useSelectedProductsStore();
  console.log(selectedProducts);
  return (
    <div className={styles.previewcontainer}>
      <ul className={styles.productlist}>
        {selectedProducts &&
          selectedProducts.map((item: any, index: number) => (
            <li key={index + 1000}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt="PreviewImage"
                  width={100}
                  height={100}
                />
              ) : item.images && item.images.length > 0 ? (
                <Image
                  src={item.images[0]}
                  alt="PreviewImage"
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src={placeholder}
                  alt="PreviewImage"
                  width={100}
                  height={100}
                />
              )}
              {Object.entries(item)
                .filter(([key]) => key !== "image" && key !== "images")
                .map(([key, value]) => (
                  <p key={key}>
                    <span className="font-bold">{key}:</span>{" "}
                    {typeof value === "object"
                      ? JSON.stringify(value)
                      : (value as string)}
                  </p>
                ))}
            </li>
          ))}
      </ul>
    </div>
  );
};
