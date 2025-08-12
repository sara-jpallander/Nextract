"use client";

import { motion } from "motion/react";

function LoadingCircleSpinner() {
  return (
    <div className="container-spinner">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
        .container-spinner {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            border-radius: 8px;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color: blue;
            will-change: transform;
        }
        `}
    </style>
  );
}

export default LoadingCircleSpinner;
