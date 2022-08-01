// Modules
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { GlobalContext, Refs } from "../../pages/_app";

// Styles
import styles from "./nav.module.scss";

// Components
import LinkNav from "./Link/index";

// Variants
import { containerVariants } from "../animations/variants/stagger";

// Lang
import useTranslation from "next-translate/useTranslation";

// Hooks
import { useAnimatedNav } from "../../hooks/useAnimatedNav";

export default function Nav() {
  const { goTo } = useContext(GlobalContext);

  // Lang
  const { t } = useTranslation("common");

  // State
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const goto = (link: Refs) => {
    setIsResponsiveOpen(false);
    if (goTo) goTo(link);
  };

  // Hook state
  const isNavOpen = useAnimatedNav({});

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${styles.nav} ${!isNavOpen &&
        !isResponsiveOpen &&
        styles.close}`}
    >
      <div
        onClick={() => {
          setIsResponsiveOpen(prev => !prev);
        }}
        className={`${styles.nav_hamburger} ${isResponsiveOpen && styles.open}`}
      >
        <div className={styles.nav_hamburger_1}></div>
        <div className={styles.nav_hamburger_2}></div>
        <div className={styles.nav_hamburger_3}></div>
      </div>
      <div className={`${styles.nav_links} ${isResponsiveOpen && styles.open}`}>
        <LinkNav linkType="lang" />
        <LinkNav
          linkType="about"
          text={t("nav-link-1")}
          goto={() => {
            goto("about-me");
          }}
        />
        <LinkNav
          linkType="experience"
          text={t("nav-link-2")}
          goto={() => {
            goto("experience");
          }}
        />
        <LinkNav
          linkType="skills"
          text={t("nav-link-3")}
          goto={() => {
            goto("skills");
          }}
        />
        <LinkNav
          linkType="projects"
          text={t("nav-link-4")}
          goto={() => {
            goto("projects");
          }}
        />
        <LinkNav
          linkType="contact"
          text={t("nav-link-5")}
          goto={() => {
            goto("contact-me");
          }}
        />
      </div>
    </motion.nav>
  );
}
