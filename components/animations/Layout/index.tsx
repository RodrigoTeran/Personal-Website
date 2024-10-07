// Modules
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { loaderVariants } from "../variants/svg";
import { fadeVariants } from "../variants/fade";
import { useRouter } from "next/router";

// Styles
import styles from "./layout.module.scss";

// Context
import { GlobalContext } from "../../../pages/_app";

// Icons
import Icon from "../../Icons/index";

// Components
import Nav from "../../Nav/index";
import SocialMedia from "../../SocialMedia/index";
import LayoutBackground from "../../Layout/index";

type Props = {
  children: any;
};

export default function LayoutAnimation({ children }: Props) {
  // Context
  const { isLayoutAnimationOpen, setIsLayoutAnimationOpen } =
    useContext(GlobalContext);

  const router = useRouter();

  // Timing animation
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (setIsLayoutAnimationOpen) setIsLayoutAnimationOpen(false);
      clearTimeout(timeOut);
    }, 3000);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {isLayoutAnimationOpen ? (
        <motion.div
          exit="exit"
          key="loader-layout"
          initial="hidden"
          animate="visible"
          variants={loaderVariants}
          className={styles.loader}
        >
          <Icon.Cat />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeVariants}
          exit="exit"
          key="layout"
          initial="hidden"
          animate="visible"
          className={styles.wrapper}
        >
          {router.pathname !== "/crypto" && <Nav />}
          <LayoutBackground />
          <SocialMedia />
          <div className={styles.wrapper_children}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
