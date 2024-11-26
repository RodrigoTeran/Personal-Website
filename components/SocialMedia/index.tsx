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
        href="https://www.instagram.com/rodrigoteranhdz"
        target="_blank"
        rel="noreferrer noopener"
        title="Instagram"
      >
        <Icon.Instagram />
      </motion.a>
      <motion.a
        variants={elementVariants}
        href="https://www.youtube.com/@rodrigoteranhdz"
        target="_blank"
        rel="noreferrer noopener"
        title="YouTube"
      >
        <Icon.Youtube />
      </motion.a>
      <motion.a
        variants={elementVariants}
        href="https://www.linkedin.com/in/rodrigoteranhdz"
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
