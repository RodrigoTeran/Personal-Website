// Languages
import useTranslation from "next-translate/useTranslation";

import { useRef } from "react";

// Components
import Quotes from "../Quotes/index";

// Styles
import styles from "./left.module.scss";

// Animations Scroll
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

export default function LeftInfo() {
  // Refs for animations
  const p = useRef(null);

  // Animations
  useAnimationsScroll([p], 0.6, "notAppear_leftToRight");

  // Languages
  const { t } = useTranslation("about");

  return (
    <section className={styles.left}>
      <p ref={p}>{t("left-presentation")}</p>
      <Quotes
        text={t("left-quote")}
        person="Alejandro Taboada"
        link="https://www.youtube.com/channel/UC7QoKU6bj1QbXQuNIjan82Q"
      ></Quotes>
    </section>
  );
}
