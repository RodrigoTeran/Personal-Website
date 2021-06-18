import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";

// App Context
import { AppContext } from "../../../pages/_app";

// Variants
import {
  svgPathVariants,
  loaderVariants,
  infoVariants,
  h1Variants,
} from "../../Variants/LayoutLoader";

// Styles
import styles from "./loader.module.scss";

export default function Loader() {
  const { setIsModal, setIsInLayoutLoader } = useContext(AppContext);
  const [isSvg, setIsSvg] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsInLayoutLoader(false);
      setIsModal(false);
      clearTimeout(timeOut);
    }, 6000);

    const timeOutSvg = setTimeout(() => {
      setIsSvg(false);
      clearTimeout(timeOutSvg);
    }, 3500);
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
        <AnimatePresence exitBeforeEnter>
          {isSvg ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              height="55"
              width="55"
            >
              <motion.path
                key="svg"
                variants={svgPathVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                d="M 27.5, 27.5 m -27, 0 a 27,27 0 1,0 54,0 a 27,27 0 1,0 -54,0"
                stroke="rgb(67, 247, 213)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ) : null}
        </AnimatePresence>
        <motion.div variants={h1Variants} className={styles.loader_h1}>
          <h1>Rodrigo Terán</h1>
        </motion.div>
      </div>
      <motion.div
        className={styles.loader_line}
        variants={infoVariants}
      ></motion.div>
    </motion.div>
  );
}
