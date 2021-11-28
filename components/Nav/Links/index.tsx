import { motion } from "framer-motion";
import { useContext } from "react";

// Languages
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./links.module.scss";

// Variants
import { elementVariants } from "./../../Variants/StaggerChildren";

// Context
import { AppContext } from "../../../pages/_app";

import Link from "next/link";

type PropsLinks = {
  isResponsive?: boolean;
  goto: (where: any) => void;
};
export default function Links({ isResponsive, goto }: PropsLinks) {
  // Languages
  const { t, lang } = useTranslation("common");

  const { aboutRef, workRef, contactRef, experienceRef } = useContext(
    AppContext
  );

  return (
    <>
      <motion.div
        variants={elementVariants}
        className={`${isResponsive ? styles.link_responsive : styles.link}`}
      >
        <Link href="/" locale={lang == "es" ? "en" : "es"}>
          <a>
            <img
              src={`${lang == "es" ? "svgs/mexico.svg" : "svgs/usa.svg"}`}
              alt={lang == "es" ? "Bandera" : "Flag"}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </a>
        </Link>
      </motion.div>
      <motion.div
        variants={elementVariants}
        className={`${isResponsive ? styles.link_responsive : styles.link}`}
        onClick={() => {
          goto(aboutRef);
        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
          </svg>
        </span>
        {t("nav-link-1")}
      </motion.div>
      <motion.div
        variants={elementVariants}
        className={`${isResponsive ? styles.link_responsive : styles.link}`}
        onClick={() => {
          goto(experienceRef);
        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z" />
          </svg>
        </span>
        {t("nav-link-2")}
      </motion.div>
      <motion.div
        variants={elementVariants}
        className={`${isResponsive ? styles.link_responsive : styles.link}`}
        onClick={() => {
          goto(workRef);
        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
          </svg>
        </span>
        {t("nav-link-3")}
      </motion.div>
      <motion.div
        variants={elementVariants}
        className={`${isResponsive ? styles.link_responsive : styles.link}`}
        onClick={() => {
          goto(contactRef);
        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
          </svg>
        </span>
        {t("nav-link-4")}
      </motion.div>
    </>
  );
}
