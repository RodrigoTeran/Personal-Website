import { useRef, useContext } from "react";
import { GlobalContext } from "../../pages/_app";

// Styles
import styles from "./contact.module.scss";

// Components
import HeaderSection from "../Sections/index";

// Translation
import useTranslation from "next-translate/useTranslation";

// Hooks
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

// Components
import Presentation from "./Presentation/index";
import Card from "./Card/index";

export default function ContactMe() {
  const { contactMeRef } = useContext(GlobalContext);

  // Animations
  const percentage: number = 0.45;

  // Translation
  const { t } = useTranslation("common");

  const formData = useRef<any>(null);

  useAnimationsScroll({
    componentsList: [
      {
        element: formData,
        notAppearClass: styles.not,
        screenPercentage: 0.5
      }
    ]
  });

  return (
    <section ref={contactMeRef} className={styles.contact}>
      <div className={styles.contact_h2}>
        <HeaderSection
          text={t("nav-link-5")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div ref={formData} className={styles.contact_data}>
        <Presentation />
        <Card />
      </div>
    </section>
  );
}
