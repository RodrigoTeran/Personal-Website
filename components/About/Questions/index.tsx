// Styles
import { CSSProperties } from "react";
import styles from "./question.module.scss";

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
  return (
    <div
      data-alignment={align}
      ref={ref}
      className={`${styles.question} ${styles[align]}`}
      style={style}
    >
      <h3>
        {question}
        &nbsp;
        <span>?</span>
      </h3>
      {children}
    </div>
  );
}
