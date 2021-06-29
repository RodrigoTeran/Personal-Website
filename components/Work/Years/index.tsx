import { useRef } from "react";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Styles
import styles from "./years.module.scss";

type Props = {
  years: number;
  text: any;
};

export default function Years({ years, text }: Props) {
  // Refs for animations
  const boldRef = useRef(null);
  const divRef = useRef(null);

  // Animations
  useAnimationsScroll([boldRef, divRef], 0.6, "notAppear_leftToRight");

  return (
    <section className={styles.years}>
      <b ref={boldRef}>
        {years}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </b>
      <br />
      <div ref={divRef}>{text}</div>
    </section>
  );
}
