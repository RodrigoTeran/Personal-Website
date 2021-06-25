import { useContext } from "react";

// Styles
import styles from "./work.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

export default function Work() {
  const { experienceRef } = useContext(AppContext);
  return (
    <article className={`${styles.work} sections`} ref={experienceRef}>
      <h2 className={`${styles.work_h2}`}>Experiencia</h2>
    </article>
  );
}
