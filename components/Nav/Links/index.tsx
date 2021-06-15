import { motion } from "framer-motion";
import { useContext } from "react";

// Styles
import styles from "./links.module.scss";

// Variants
import { elementVariants } from "./../Variants";

// Context
import { AppContext } from "../../../pages/_app";

type PropsLinks = {
  isResponsive?: boolean;
  goto: (where: any) => void;
};
export default function Links({ isResponsive, goto }: PropsLinks) {
  const { aboutRef, workRef, contactRef } = useContext(AppContext);

  return (
    <>
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
        Acerca de mí
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
        Proyectos
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
        Contáctame
      </motion.div>
    </>
  );
}
