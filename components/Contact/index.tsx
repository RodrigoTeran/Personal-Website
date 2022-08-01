// Styles
import styles from "./contact.module.scss";

// Components
import HeaderSection from "../Sections/index";

// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Presentation from "./Presentation/index";
import Card from "./Card/index";

export default function Experience() {
  // Animations
  const percentage: number = 0.45;

  // Translation
  const { t } = useTranslation("common");

  return (
    <section className={styles.contact}>
      <div className={styles.contact_h2}>
        <HeaderSection
          text={t("nav-link-5")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div className={styles.contact_data}>
        <Presentation />
        <Card />
      </div>
    </section>
  );
}
