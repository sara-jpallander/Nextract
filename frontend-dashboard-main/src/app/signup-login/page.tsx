"use client";

import LoginForm from "../../components/sign-up & login/LoginForm";
import SignupForm from "../../components/sign-up & login/SignupForm";
import { useState } from "react";
import styles from "../../components/sign-up & login/signup-login.module.css";
import pexels from "../../public/pexels-photo.png";
import Image from "next/image";
import logo from "../../public/Nextract-logo.svg";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const changeView = () => {
    setClicked((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <div
        className={
          clicked ? `${styles.welcome} ${styles.register}` : `${styles.welcome}`
        }
      >
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width={250}
          height={250}
        ></Image>
        <section className={styles.section}>
          <h1>Welcome to Nextract</h1>
          <p className={styles.welcomeMsg}>
            Create an account to easily manage and publish your products.
          </p>
          <Image src={pexels} alt="img"></Image>
          <p className={styles.redirect}>
            {clicked ? `Already have an account? ` : `Not registered? `}
            <span onClick={changeView}>Click here</span>
          </p>
        </section>
      </div>
      <LoginForm clicked={clicked} />
      <SignupForm clicked={clicked} />
      {/* <ContactTrigger /> */}
    </main>
  );
}
