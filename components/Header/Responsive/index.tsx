// Styles
import styles from "./responsive.module.scss";

export default function Responsive({ children }: any) {
  return <div className={styles.responsive}>{children}</div>;
}
