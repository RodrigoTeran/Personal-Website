// Styles
import { CSSProperties } from "react";
import styles from "./question.module.scss";

// Translation
import useTranslation from "next-translate/useTranslation";

type Props = {
  question: string;
  children: any;
  align: "left" | "right";
  ref?: any;
  style?: CSSProperties;
};

export default function Question({
  question,
  children,
  align,
  ref,
  style,
}: Props) {
  // Translation to verify ¿? icons
  const { lang } = useTranslation();

  return (
    <div
      data-alignment={align}
      ref={ref}
      className={`${styles.question} ${styles[align]}`}
      style={style}
    >
      <h3>
        {lang == "es" && <span>¿&nbsp;</span>}
        {question}
        &nbsp;
        <span>?</span>
      </h3>
      {children}
    </div>
  );
}
