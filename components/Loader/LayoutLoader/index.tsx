import { motion } from "framer-motion";
import { useContext, useEffect } from "react";

// App Context
import { AppContext } from "../../../pages/_app";

// Variants
import {
  svgPathVariants,
  loaderVariants,
  infoVariants,
} from "../../Variants/LayoutLoader";

// Styles
import styles from "./loader.module.scss";

export default function Loader() {
  const { setIsModal, setIsInLayoutLoader } = useContext(AppContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsInLayoutLoader(false);
      setIsModal(false);
      clearTimeout(timeOut);
    }, 4500);
  }, []);

  return (
    <motion.div
      variants={loaderVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className={styles.loader}
    >
      <div className={styles.loader_circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          height="55"
          width="55"
        >
          <motion.path
            variants={svgPathVariants}
            initial="hidden"
            animate="visible"
            d="M 27.5, 27.5 m -27, 0 a 27,27 0 1,0 54,0 a 27,27 0 1,0 -54,0"
            stroke="rgb(67, 247, 213)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <h1>R</h1>
      </div>
      <motion.div className={styles.loader_info} variants={infoVariants}>
        Rodrigo Terán
      </motion.div>
    </motion.div>
  );
}
