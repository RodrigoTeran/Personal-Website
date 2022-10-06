// Modules
import { motion } from "framer-motion";

// Variants
import {
  containerVariants,
  elementVariants,
} from "../animations/variants/stagger";

// Styles
import styles from "./social.module.scss";

// Icons
import Icon from "../Icons/index";

export default function SocialMedia() {
  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.aside}
    >
      <motion.a
        variants={elementVariants}
        href="https://www.facebook.com/rodrigo.teran.127"
        target="_blank"
        rel="noreferrer noopener"
        title="Facebook"
      >
        <Icon.Facebook />
      </motion.a>
      <motion.a
        variants={elementVariants}
        href="https://www.linkedin.com/in/rodrigo-ter%C3%A1n-hern%C3%A1ndez-5618871b5"
        target="_blank"
        rel="noreferrer noopener"
        title="Linkedin"
      >
        <Icon.LinkedinIn />
      </motion.a>
      <motion.a
        variants={elementVariants}
        href="https://github.com/RodrigoTeran"
        target="_blank"
        rel="noreferrer noopener"
        title="Github"
      >
        <Icon.Github />
      </motion.a>
      <motion.div
        variants={elementVariants}
        className={styles.aside_vr}
      ></motion.div>
    </motion.aside>
  );
}
