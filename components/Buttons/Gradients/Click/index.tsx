import { motion } from "framer-motion";

// Styles
import styles from "../button.module.scss";

type PropsBtn = {
  onClickFunction: () => any;
  text: string;
  isGradient?: boolean;
  addedClasses?: string;
  variants?: any;
};

export default function ClickeableBtn({
  onClickFunction,
  text,
  isGradient,
  addedClasses,
  variants,
}: PropsBtn) {
  return (
    <motion.button
      variants={variants}
      className={`${styles.btn} ${
        isGradient ? styles.gradient : styles.blank
      } ${addedClasses ? addedClasses : ""}`}
      onClick={onClickFunction}
    >
      {text}
    </motion.button>
  );
}
