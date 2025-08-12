"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import image from "./signin.gif";
import dashboardImg from "./Dashboard.gif";
import APIImg from "./APIpage.gif";
import ProductsImg from "./Products.gif";
import SupportImg from "./Support.gif";

interface HelpModalProps {
  onClick: () => void;
  isLoggedIn?: boolean;
  pageNr?: number;
}

export function HelpModal({ onClick, isLoggedIn, pageNr }: HelpModalProps) {
  const [page, setPage] = useState<number>(0);
  const pages: number[] = [1, 2, 3, 4, 5];

  function helpMarkup(id: number) {
    const htmlMarkup: { [key: number]: React.ReactNode } = {
      1: (
        <div key={id} className={styles.help}>
          <h1>Sign up or Sign in</h1>
          <Image
            className={styles.helpImg}
            src={image}
            alt="signin-gif"
            unoptimized
          />

          <p>
            Press Sign in if you already have a registered account. Otherwise
            you can press Sign up to register a new company account with your
            name, email and password.
          </p>
        </div>
      ),
      2: (
        <div key={id} className={styles.help}>
          <h1>Dashboard</h1>
          <Image
            className={styles.helpImg}
            src={dashboardImg}
            alt="dashboard-gif"
            unoptimized
          />

          <p>
            Here you can view your activity such as history, your saved APIs,
            your total ammount of products. From here you can add a new API or
            press one of your stored APIs to update it
          </p>
        </div>
      ),
      3: (
        <div key={id} className={styles.help}>
          <h1>API page</h1>

          <Image
            className={styles.helpImg}
            src={APIImg}
            alt="API-page-gif"
            unoptimized
          />

          <p>
            Here you can add or update an existing api. Just enter the API url
            in the input field or upload an API as a file and press submit.
            Choose your desired keys and preview your new API. Then just hit
            save and it gets added to your collection of customized APIs
          </p>
        </div>
      ),
      4: (
        <div key={id} className={styles.help}>
          <h1>Products page</h1>
          <Image
            unoptimized
            className={styles.helpImg}
            src={ProductsImg}
            alt="Products-gif"
          />

          <p>
            Here you can get a full view with all the products from your API and
            the information about them based on the keys you have chosen.
            Preview your products and get an idea on how it can look on your own
            website. Hit Download if you want a full HTML markup containing your
            chosen products
          </p>
        </div>
      ),
      5: (
        <div key={id} className={styles.help}>
          <h1>Support page</h1>
          <Image
            unoptimized
            className={styles.helpImg}
            src={SupportImg}
            alt="Support-gif"
          />

          <p>
            Look in our FAQ if your need help. Feel free to contact us via our
            contact form if you can&#39;t find the help you are looking for. You
            can always get help from our thrustworthy assistant Dataknut via the
            chat button in the lower right corner
          </p>
        </div>
      ),
    };
    return htmlMarkup[id];
  }

  function handleArrow(direction: "left" | "right"): void {
    setPage((prev) => {
      if (direction === "left") return prev > 0 ? prev - 1 : prev;
      if (direction === "right")
        return prev < pages.length - 1 ? prev + 1 : prev;
      return prev;
    });
  }

  return (
    <div
      className={styles.helpModalContainer}
      onClick={(e) => {
        if (
          (e.target as HTMLElement).className.includes("helpModalContainer")
        ) {
          onClick();
        }
      }}
    >
      <div className={styles.helpModal}>
        <button onClick={onClick} className={styles.closeBtn}>
          X
        </button>
        {!isLoggedIn ? (
          <div className={styles.arrowLeft} onClick={() => handleArrow("left")}>
            {"<-"}
          </div>
        ) : (
          ""
        )}

        <div className={styles.pageContainer}>
          <motion.div
            className={styles.slider}
            animate={{ x: -page * 700 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {isLoggedIn && pageNr
              ? helpMarkup(pageNr)
              : pages.map((p) => helpMarkup(p))}
          </motion.div>
        </div>
        {!isLoggedIn ? (
          <div
            className={styles.arrowRight}
            onClick={() => handleArrow("right")}
          >
            {"->"}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
