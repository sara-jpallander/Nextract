"use client";

import * as motion from "motion/react-client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import styles from "@/app/dashboard/support/support.module.css";

const faqs = [
  {
    id: "api",
    question: "How do I connect to an API?",
    answer: "Use our API key found in your settings.",
  },
  {
    id: "product",
    question: "How do I edit or delete a product?",
    answer: "Go to your dashboard and select the product to edit or delete.",
  },
  {
    id: "publish",
    question: "How do I publish website content?",
    answer: "Click 'Publish' on your content editor page.",
  },
  {
    id: "account",
    question: "How do I manage my account settings?",
    answer: "Navigate to Account > Settings in the sidebar.",
  },
  {
    id: "reset",
    question: "I forgot my password, how do I reset it?",
    answer: "Click on 'Forgot password' at login and follow the instructions.",
  },
];

export default function Faq() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [mode, setMode] = useState<"faq" | "contact">("faq");

  if (mode === "contact") {
    return (
      <>
        <ContactForm />
        <p className={styles.mt4}>
          ←{" "}
          <button className={styles.linkButton} onClick={() => setMode("faq")}>
            Back to FAQ
          </button>
        </p>
      </>
    );
  }

  return (
    <>
      <section className={styles.faqContainer}>
        <h1 className={styles.faqTitle}>FAQ</h1>

        <div className={styles.faqList}>
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className={styles.faqItem}
              onClick={() => setExpandedId((prev) => (prev === id ? null : id))}
            >
              <div className={styles.faqQuestion}>
                <span>{question}</span>
                <span className={styles.arrow}>→</span>
              </div>
              {expandedId === id && (
                <motion.div
                  className={styles.faqAnswer}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
                  }}
                >
                  {answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      <p className={styles.faqFooter}>
        Didn’t find the answer?{" "}
        <button
          className={styles.linkButton}
          onClick={() => setMode("contact")}
        >
          Reach out to us!
        </button>
      </p>
    </>
  );
}
