import { motion } from "framer-motion";

// Variants
import { buttonVariants } from "../../../Variants/Header";

// Styles
import styles from "../button.module.scss";

type PropsBtn = {
  onClickFunction: () => any;
  text: string;
  isGradient?: boolean;
  addedClasses?: string;
};

export default function ClickeableBtn({
  onClickFunction,
  text,
  isGradient,
  addedClasses,
}: PropsBtn) {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className={`${styles.btn} ${
        isGradient ? styles.gradient : styles.blank
      } ${addedClasses ? addedClasses : ""}`}
      onClick={onClickFunction}
    >
      {text}
    </motion.button>
  );
}
