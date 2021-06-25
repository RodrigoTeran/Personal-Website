import { useContext, useRef } from "react";

// App Context
import { AppContext } from "../../pages/_app";

// Styles
import styles from "./about.module.scss";

// Components
import LeftInfo from "./LeftInfo/index";
import RightInfo from "./RightInfo/index";

// Animations Scroll
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

export default function About() {
  const { aboutRef } = useContext(AppContext);

  // Refs for animations scroll
  const h2 = useRef(null);

  // Animations
  useAnimationsScroll([h2], 0.6, "notAppear_bottomToTop");

  return (
    <article ref={aboutRef} className={`${styles.about} sections`}>
      <h2
        ref={h2}
        className={`${styles.about_h2} notAppear_bottomToTop notAppearing_transitions`}
      >
        Acerca de mí
      </h2>
      <div className={styles.info}>
        <LeftInfo></LeftInfo>
        <RightInfo></RightInfo>
      </div>
    </article>
  );
}
