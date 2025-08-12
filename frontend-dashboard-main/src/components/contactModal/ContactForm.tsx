"use client";
import styles from "@/app/dashboard/support/support.module.css";
import { useState } from "react";

export default function ContactForm() {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [formData, setFormData] = useState({
    name: "",
    orgNumber: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendData = new FormData();
    sendData.append("name", formData.name);
    sendData.append("orgNumber", formData.orgNumber);
    sendData.append("subject", formData.subject);
    sendData.append("message", formData.message);

    if (formData.file) {
      sendData.append("file", formData.file);
    }

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_HTTP_PROTOCOL ? "http" : "https"
        }://${serverURL}/dashboard/support`,
        {
          method: "POST",
          body: sendData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }
      alert("Message sent!");
      console.log("Message sent:", result);
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className={styles.faqContainer}>
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <div className={styles.contactCard}>
          <form onSubmit={handleSubmit} className={styles.formControl}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              name="orgNumber"
              type="text"
              placeholder="Organisation number"
              value={formData.orgNumber}
              onChange={handleChange}
              className={styles.input}
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">What do you need help with?</option>
              <option value="offert">API</option>
              <option value="support">Products</option>
              <option value="fakturafråga">Invoice</option>
              <option value="annat">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Describe your issue..."
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
            <input
              name="file"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            <button type="submit" className={styles.buttonPrimary}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
