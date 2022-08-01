// Styles
import styles from "./layout.module.scss";

// Icons
import Icon from "../Icons/index";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Icon.Code />
      <div className={styles.layout_circle}></div>
    </div>
  );
}
