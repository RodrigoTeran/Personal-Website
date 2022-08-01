// Styles
import styles from "./btn.module.scss";

type Props = {
  callback: () => any;
  text: string;
  withBorder: boolean;
  type: "gradient" | "white" | "black";
  size: "small" | "medium" | "large";
  isClicked?: boolean;
  className?: string;
  ref?: any;
};

export default function Btn({
  callback,
  text,
  withBorder,
  type,
  size,
  isClicked,
  className,
  ref,
}: Props) {
  return (
    <button
      ref={ref}
      className={`${styles.btn} ${className && className} ${
        withBorder && styles.btn_border
      } ${styles[type]} ${styles[size]} ${
        isClicked && type == "black" && styles.black_click
      }`}
      onClick={callback}
    >
      {text}

      {(type == "gradient" || type == "white") && (
        <div
          className={`${styles[`gradient_cover_${type}`]} ${
            styles.gradient_cover
          }`}
        >
          {text}
        </div>
      )}
    </button>
  );
}
