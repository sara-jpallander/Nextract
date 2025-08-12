/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductImageModal from "./ProductImageModal";
import { useSelectedProductsStore } from "@/lib/store";
import styles from "./styles.module.css";

export interface Product {
  [key: string]: string | string[] | any;
}

const ProductList = ({ allProducts }: { allProducts: Product[] }) => {
  const { selectedProducts, setSelectedProducts } = useSelectedProductsStore();
  const [showModal, setShowModal] = useState(false);
  const [productImage, setProductImage] = useState<string | null>(null);

  const isProductSelected = (product: Product): boolean => {
    return selectedProducts.some((p) => {
      if (product.id && p.id) {
        return product.id === p.id;
      }
      return JSON.stringify(p) === JSON.stringify(product);
    });
  };

  const toggleProductSelection = (product: Product) => {
    setSelectedProducts((prev: Product[]) =>
      isProductSelected(product)
        ? prev.filter((p) => {
            if (product.id && p.id) {
              return p.id !== product.id;
            }
            return JSON.stringify(p) !== JSON.stringify(product);
          })
        : [...prev, product]
    );
  };

  const handleClearSelection = () => {
    setSelectedProducts([]);
  };

  const isImageUrl = (value: any): boolean => {
    if (typeof value === "string")
      return (
        value.endsWith("jpg") ||
        value.endsWith("png") ||
        value.endsWith("jpeg") ||
        value.endsWith("gif") ||
        value.endsWith("svg") ||
        value.endsWith("webp")
      );
    if (Array.isArray(value) && value.length > 0)
      return typeof value[0] === "string" && isImageUrl(value[0]);
    return false;
  };

  const handleImageClick = (product: Product) => {
    const imageField = Object.keys(product).find((key) =>
      isImageUrl(product[key])
    );

    if (imageField) {
      const imageValue = getProductValue(product, imageField);
      setShowModal(true);
      setProductImage(imageValue);
    }
  };

  const handleCloseImageModal = () => {
    setShowModal(false);
    setProductImage(null);
  };

  const getProductValue = (product: Product, key: string): string | any => {
    const value = product[key];
    if (Array.isArray(value)) return value[0];
    return value;
  };

  const renderCell = (product: Product, key: string) => {
    const value = getProductValue(product, key);

    if (isImageUrl(product[key])) {
      return (
        <Image
          src={value}
          alt="Product Image"
          className={styles.image}
          width={50}
          height={50}
          onClick={() => handleImageClick(product)}
        />
      );
    }

    if (typeof value === "object" && value !== null) {
      try {
        return Object.entries(value)
          .map(
            ([key, value]) =>
              `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
          )
          .join(", ");
      } catch (error) {
        console.log(error);
        return String(value);
      }
    }

    return value;
  };

  const uniqueKeys = Array.from(
    new Set(allProducts.flatMap((product: any) => Object.keys(product)))
  ).sort((a, b) => {
    if (/(img|image|images|thumbnail)/i.test(a as string)) return -1;
    if (/(img|image|images|thumbnail)/i.test(b as string)) return 1;
    return 0;
  });

  return (
    <>
      {showModal && (
        <ProductImageModal
          productImage={productImage}
          onClose={handleCloseImageModal}
        />
      )}
      <main className={styles.main}>
        <div className={styles.container}>
          <ul className={styles.productlist}>
            <li className={`${styles.header} ${styles.row}`}>
              <span className={styles.cell}>Add to preview</span>
              {uniqueKeys.map((item, index) => (
                <span key={index} className={styles.cell}>
                  {(item as string).charAt(0).toUpperCase() +
                    (item as string).slice(1)}
                </span>
              ))}
            </li>

            {allProducts.map((product: Product, index: number) => (
              <li key={index} className={styles.row}>
                <span className={styles.cell}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isProductSelected(product)}
                    onChange={() => toggleProductSelection(product)}
                  />
                </span>
                {uniqueKeys.map((value: string, index: number) => (
                  <span key={index} className={styles.cell}>
                    {renderCell(product, value)}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className={styles.buttoncontainer}>
        <button className={styles.previewbutton} onClick={handleClearSelection}>
          Clear Selection
        </button>
        <Link href="/dashboard/preview">
          <button className={styles.previewbutton}>Preview</button>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
