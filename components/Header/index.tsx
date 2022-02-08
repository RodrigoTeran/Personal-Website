// Modules
import { motion } from "framer-motion";

// Styles
import styles from "./header.module.scss";

// Components
import Title from "./Title/index";
import ImageShimmer from "./Shimmer/index";

const imageVariants = {
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
      <div>
        <Title />
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className={styles.header_right}
      >
        <ImageShimmer />
      </motion.div>
    </header>
  );
}
