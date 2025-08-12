/* eslint-disable react/no-children-prop */
"use client";
import { useMemo } from "react";
import { JsonViewer } from "./JsonView";
import { KeyList } from "./KeyList";
import { useChosenKeysStore, useShowPreviewStore } from "@/lib/store";
import { extractKeyValuePairs } from "@/utils/extractKeyValuePairs";
import type { KeyValuePair } from "@/utils/extractKeyValuePairs";
import styles from "@/app/dashboard/api/api.module.css";
import ApiPreviewModal from "../ApiPreviewModal/ApiPreviewModal";

interface ConverterProps {
  data: object[];
}

export const Converter = ({ data }: ConverterProps) => {
  const { chosenKeys, setChosenKeys } = useChosenKeysStore();
  const showPreview = useShowPreviewStore((state) => state.showPreview);
  const setShowPreview = useShowPreviewStore((state) => state.setShowPreview);

  const keyValuePairs = useMemo<KeyValuePair[]>(
    () => extractKeyValuePairs(data),
    [data]
  );

  const filteredData = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return keyValuePairs.reduce((acc: any, { key, value }) => {
      if (chosenKeys.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }, [keyValuePairs, chosenKeys]);

  const handleToggle = (key: string) => {
    setChosenKeys(
      chosenKeys.includes(key)
        ? chosenKeys.filter((k) => k !== key)
        : [...chosenKeys, key]
    );
  };

  const handleCloseModal = () => {
    if (showPreview) {
      setShowPreview();
    }
  };

  return (
    <>
      <div className={styles.covertedKeys}>
        <ul className={styles.keyList}>
          {keyValuePairs.map((item, index) => (
            <KeyList
              key={index}
              keyName={item.key}
              index={index}
              onToggle={handleToggle}
            />
          ))}
        </ul>
        {showPreview && (
          <ApiPreviewModal
            children={<JsonViewer json={filteredData} />}
            isOpen={showPreview}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};
