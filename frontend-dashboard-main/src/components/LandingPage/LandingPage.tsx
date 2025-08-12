"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Card from "../Card/Card";

import logo from "../../public/Nextract-logo.svg";
import hero from "../../public/hero.svg";
import mission from "../../public/ourMission.svg";
import cardimg1 from "../../public/apipreview.png";
import cardimg2 from "../../public/datapreview.png";
import cardimg3 from "../../public/publishpreview.png";
import illustration from "../../public/Bring-Solutions-To-Problems--Streamline-Bangalore.svg";
import facebook from "../../public/Facebook.png";
import linkedin from "../../public/Linkedin.png";
import instagram from "../../public/Instagram.png";
import symbol from "../../public/Symbol.svg";
import globe from "../../public/globe.png";
import down from "../../public/Down.png";
import Image from "next/image";

import styles from "./landingPage.module.css";
import { HelpButton } from "../HelpButton/helpBtn";
import { HelpModal } from "../helpModal/HelpModal";

export default function LandingPage() {
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const router = useRouter();

  function handleClick() {
    router.push("/signup-login");
  }

  return (
    <>
      {showHelpModal ? (
        <HelpModal
          onClick={() => {
            setShowHelpModal(!showHelpModal);
          }}
        />
      ) : (
        ""
      )}

      <main className={styles.main} id="home">
        <header className={styles.header}>
          <Image src={logo} alt="logo" />
          <ul className={styles.nav}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#mission">Our mission</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#whyus">Why us</a>
            </li>
          </ul>
          <div className={styles.helpBtn}>
            <HelpButton
              onClick={() => setShowHelpModal(true)}
              title="Click this to get a short guide"
            />
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.text}>
            <h1>
              Connect Your APIs. Preview Your Products. Publish with Ease.
            </h1>
            <p>
              Streamline your product management and API integrations with ease.
            </p>
            <div className={styles.buttons}>
              <button className={styles.signupBtn} onClick={handleClick}>
                Get started
              </button>
            </div>
          </section>
          <Image src={hero} alt="hero" className={styles.hero} />
        </div>

        <div className={styles.mission} id="mission">
          <Image src={mission} alt="info" />
          <section>
            <h1>Our mission</h1>
            <p>
              Nextract simplifies data retrieval for startups and small
              businesses. We eliminate technical barriers so you can easily
              connect with suppliers and product vendors, manage your data, and
              focus on growing your business — all without extensive coding
              knowledge or expensive development teams.
            </p>
          </section>
        </div>

        <section className={styles.services} id="services">
          <h1>What you can do with Nextract</h1>
          <div className={styles.cards}>
            <Card
              imgurl={cardimg1}
              title="Connect multiple APIs"
              text="No coding required for API integration."
            />
            <Card
              imgurl={cardimg2}
              title="Dynamic Data Overview"
              text="See your data in real-time before publishing."
            />
            <Card
              imgurl={cardimg3}
              title="Preview your products"
              text="Deploy with confidence."
            />
          </div>
        </section>

        <div className={styles.whyus} id="whyus">
          <Image src={illustration} alt="illustration" />
          <div className={styles.container}>
            <h1>Why choose us?</h1>
            <div className={styles.bubble}>
              <article>
                <h1>
                  Save Integration <br />
                  Time
                </h1>
                <p>
                  Reduce integration time by up to 70%., which allows your team
                  to focus on core business features.
                </p>
              </article>

              <article>
                <h1>
                  User-Friendly <br />
                  Interface
                </h1>
                <p>
                  Our platform makes complex data integration accessible to
                  everyone. No coding skills required!
                </p>
              </article>

              <article>
                <h1>
                  Affordable <br />
                  Pricing
                </h1>
                <p>
                  Our flexible plans provide enterprise-level capabilities at
                  startup-friendly prices, ensuring you only pay for what you
                  need.
                </p>
              </article>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.info}>
            <article>
              <h3>Contact us</h3>
              <p>nextract@gmail.com</p>
              <p>+46-2345-6789</p>
              <p>
                Drottninggatan 88, 111 36 <br />
                Stockholm, Sweden
              </p>
              <div className={styles.socials}>
                <Image src={facebook} alt="facebook" />
                <Image src={linkedin} alt="linkedin" />
                <Image src={instagram} alt="instagram" />
              </div>
            </article>

            <article>
              <h3>Services</h3>
              <p>Connect APIs</p>
              <p>Manage data</p>
              <p>Preview Products</p>
            </article>

            <article>
              <Image src={symbol} alt="symbol" />
            </article>

            <article>
              <h3>Join Our Newsletter</h3>
              <p>
                Join our newsletter and make product data easy. Get tips,
                updates, and time-saving tricks
              </p>
              <div className={styles.input}>
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </article>
          </div>

          <div className={styles.footerbottom}>
            <div className={styles.lang}>
              <Image src={globe} alt="" />
              <p>English</p>
              <Image src={down} alt="down" />
            </div>

            <p>Copyright © 2025. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
