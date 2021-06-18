import { motion } from "framer-motion";

// Styles
import styles from "../button.module.scss";

type PropsBtn = {
  onClickFunction: () => any;
  text: string;
  isGradient?: boolean;
  addedClasses?: string;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
};

export default function ClickeableBtn({
  onClickFunction,
  text,
  isGradient,
  addedClasses,
  variants,
  whileHover,
  whileTap,
}: PropsBtn) {
  return (
    <motion.button
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      className={`${styles.btn} ${
        isGradient ? styles.gradient : styles.blank
      } ${addedClasses ? addedClasses : ""}`}
      onClick={onClickFunction}
    >
      {text}
    </motion.button>
  );
}
