// Modules
import { motion } from "framer-motion";

// Styles
import styles from "./header.module.scss";

// Components
import Title from "./Title/index";
import Typing from "./Typing/index";
import Buttons from "./Btns/index";
import ImageShimmer from "../Shimmer/index";

export const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", delay: 0.5, duration: 1.2 },
  },
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <Title />
        <Typing />
        <Buttons />
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className={styles.header_right}
      >
        <ImageShimmer
          src="/images/me.png"
          alt="Rodrigo Terán"
          width={250}
          height={250}
          priority
          quality={75}
        />
      </motion.div>
    </header>
  );
}
