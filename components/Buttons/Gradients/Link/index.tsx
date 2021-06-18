import { motion } from "framer-motion";

// Styles
import styles from "../button.module.scss";

type PropsBtn = {
  link: string;
  text: string;
  target: "_blank" | "_self";
  isGradient?: boolean;
  addedClasses?: string;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
};

export default function LinkBtn({
  link,
  text,
  target,
  isGradient,
  addedClasses,
  variants,
  whileHover,
  whileTap,
}: PropsBtn) {
  return (
    <motion.a
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      className={`${styles.btn} ${
        isGradient ? styles.gradient : styles.blank
      } ${addedClasses ? addedClasses : ""}`}
      href={link}
      rel="noreferrer noopener"
      target={target}
    >
      {text}
    </motion.a>
  );
}
