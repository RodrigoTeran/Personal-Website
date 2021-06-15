import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./responsive.module.scss";

// Variants
import { elementVariants } from "./../Variants";

type PropsResponsive = {
  responsiveNav: boolean;
  setResponsiveNav: Dispatch<SetStateAction<boolean>>;
  children: any;
};

// Responsive Nav
export default function Responsive({
  responsiveNav,
  setResponsiveNav,
  children,
}: PropsResponsive) {
  return (
    <>
      <motion.div
        onClick={() => {
          setResponsiveNav(!responsiveNav);
        }}
        className={styles.responsive}
        variants={elementVariants}
      >
        <div className={`${responsiveNav ? styles.responsive_line_x : styles.responsive_line}`}></div>
        <div className={`${responsiveNav ? styles.responsive_line_x : styles.responsive_line}`}></div>
        <div className={`${responsiveNav ? styles.responsive_line_x : styles.responsive_line}`}></div>
      </motion.div>
      <div
        className={`${styles.responsive_container} ${
          responsiveNav ? styles.open : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
