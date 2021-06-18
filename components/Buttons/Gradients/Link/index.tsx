import { motion } from "framer-motion";

// Variants
import { buttonVariants } from "../../../Variants/Header";

// Styles
import styles from "../button.module.scss";

type PropsBtn = {
  link: string;
  text: string;
  target: "_blank" | "_self";
  isGradient?: boolean;
  addedClasses?: string;
};

export default function LinkBtn({
  link,
  text,
  target,
  isGradient,
  addedClasses,
}: PropsBtn) {
  return (
    <motion.a
      variants={buttonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
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
