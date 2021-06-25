import { useContext } from "react";

// App Context
import { AppContext } from "../../pages/_app";

// Styles
import styles from "./about.module.scss";

// Components
import LeftInfo from "./LeftInfo/index";
import RightInfo from "./RightInfo/index";


export default function About() {
  const { aboutRef } = useContext(AppContext);
  return (
    <article ref={aboutRef} className={`${styles.about} sections`}>
      <h2 className={styles.about_h2}>Acerca de mí</h2>
      <div className={styles.info}>
        <LeftInfo></LeftInfo>
        <RightInfo></RightInfo>
      </div>
    </article>
  );
}
