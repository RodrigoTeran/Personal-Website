import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Variants
import { containerVariants } from "../Variants/StaggerChildren";

// Hooks
import { useAnimatedNav } from "../../hooks/useAnimatedNav";

// Styles
import styles from "./nav.module.scss";

// Functions
import { goto } from "../../functions/goTo";

// Components
import Links from "./Links/index";
import Responsive from "./Responsive/index";

// Nav
export default function Nav() {
  /**
   * Is Responsive Nav Open or not
   */
  const [responsiveNav, setResponsiveNav] = useState(false);

  /**
   * When the screen is very wide, the responsive mode closes immediately
   * And the variable responsiveNav also changes, so that when the screen gets smaller
   * it doesnt appear as responsive mode
   */

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    if (window.innerWidth > 650) {
      /**
       * 650px is the max-width: 650px in styles
       */
      setResponsiveNav(false);
    }
  };
  const _goto = (where: any) => {
    setResponsiveNav(false);
    goto(where);
  };

  const isNavOpen = useAnimatedNav(10, 50);

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.nav} ${isNavOpen ? "" : styles.close}`}
    >
      <Links goto={_goto} />
      <Responsive
        responsiveNav={responsiveNav}
        setResponsiveNav={setResponsiveNav}
      >
        <Links isResponsive goto={_goto} />
      </Responsive>
    </motion.nav>
  );
}
