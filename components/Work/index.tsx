import { useContext } from "react";

// Styles
import styles from "./work.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import Proyects from "./Proyects/index";
import Skills from "./Skills/index";

export default function Work() {
  const { experienceRef } = useContext(AppContext);

  return (
    <article className={`${styles.work} sections`} ref={experienceRef}>
      <Proyects></Proyects>
      <Skills></Skills>
    </article>
  );
}
