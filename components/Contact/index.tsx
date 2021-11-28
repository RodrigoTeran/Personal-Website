import { useContext } from "react";

// Languages
import useTranslation from "next-translate/useTranslation";

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

  // Languages
  const { t } = useTranslation("contact");

  return (
    <article className={`${styles.contact} sections`} ref={contactRef}>
      <h2 className={`${stylesWork.work_h2}`}>{t("title")}</h2>
      <div className={styles.sections}>
        <LeftContact />
        <RightContact />
      </div>
    </article>
  );
}
