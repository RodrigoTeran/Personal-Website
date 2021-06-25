import { useRef } from "react";

// Styles
import styles from "./quotes.module.scss";

// Animations Scroll
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

type Props = {
  text: string;
  person: string;
};

export default function Quotes({ text, person }: Props) {
  // Refs for animations
  const quotes = useRef(null);

  // Animations
  useAnimationsScroll([quotes], 0.6, "notAppear_bottomToTop");

  return (
    <q className={`${styles.quotes}`} ref={quotes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`${styles.svg_1}`}
      >
        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
      </svg>
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`${styles.svg_2}`}
      >
        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
      </svg>
      <br />
      <span className={`${styles.span}`}>
        -&nbsp;
        <a
          href="https://www.youtube.com/channel/UC7QoKU6bj1QbXQuNIjan82Q"
          target="blank"
        >
          {person}
        </a>
      </span>
    </q>
  );
}
