import { useContext } from "react";

// Styles
import styles from "./contact.module.scss";
import stylesWork from "../Work/work.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import LeftContact from "./Left/index";
import RightContact from "./Right/index";

export default function Contact() {
  const { contactRef } = useContext(AppContext);

  return (
    <article className={`${styles.contact} sections`} ref={contactRef}>
      <h2 className={`${stylesWork.work_h2}`}>Contáctame</h2>
      <div className={styles.sections}>
        <LeftContact></LeftContact>
        <RightContact></RightContact>
      </div>
    </article>
  );
}
