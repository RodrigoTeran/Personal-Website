// Styles
import styles from "./buttonAside.module.scss";
type Props = {
  _callback: () => any;
  text: string;
  className?: string;
  isSelected: boolean;
};

export default function ButtonAside({
  _callback,
  text,
  className,
  isSelected,
}: Props) {
  return (
    <button
      onClick={_callback}
      className={`${styles.btn} ${className && className} ${
        isSelected && styles.btn_selected
      }`}
    >
      {text}
    </button>
  );
}
