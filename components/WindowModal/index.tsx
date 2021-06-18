import { Fragment, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Variants
import { modalVariants } from "../Variants/Modal";

// App Context
import { AppContext } from "../../pages/_app";

// Styles
import styles from "./modal.module.scss";

// Components
import LayoutLoader from "../Loader/LayoutLoader/index";

export default function WindowModal() {
  const { isInLayoutLoader } = useContext(AppContext);
  return (
    <motion.div
      variants={modalVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className={styles.modal}
    >
      <AnimatePresence exitBeforeEnter>
        {isInLayoutLoader ? (
          <Fragment key="loader">
            <LayoutLoader></LayoutLoader>
          </Fragment>
        ) : (
          <Fragment key="null"></Fragment>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
