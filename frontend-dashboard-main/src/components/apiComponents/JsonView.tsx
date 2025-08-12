import { JsonView, allExpanded } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import styles from "@/app/dashboard/api/api.module.css";

interface JsonViewerProps {
  json: object[];
}

export const JsonViewer = ({ json }: JsonViewerProps) => {
  return (
    <div className={styles.advContainer}>
      <div className="jsonView">
        <JsonView data={json} shouldExpandNode={allExpanded} />
      </div>
    </div>
  );
};
