import { useContext } from "react";

// Styles
import styles from "./work.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import Years from "./Years/index";
import Info from "./Info/index";

export default function Work() {
  const { experienceRef } = useContext(AppContext);
  return (
    <article className={`${styles.work} sections`} ref={experienceRef}>
      <h2 className={`${styles.work_h2}`}>Experiencia</h2>
      <div className={styles.sections}>
        <Years 
          years={3} 
          text_1="Más de tres"
          text_2="años"
          text_3="creando"
        ></Years>
        <Info></Info>
      </div>
    </article>
  );
}
