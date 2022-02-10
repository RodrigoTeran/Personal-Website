// Modules
import { useState } from "react";

// Styles
import styles from "./experience.module.scss";

// Components
import AsideBtns from "./AsideBtns/index";
import Gallery from "./Gallery/index";
import Info from "./Info/index";
import HeaderSection from "../Sections/index";

// Translation
import useTranslation from "next-translate/useTranslation";

export default function Experience() {
  // Animations
  const percentage: number = 0.45;

  // State
  const [projectIndex, setProjectIndex] = useState<0 | 1 | 2 | 3 | 4>(0);

  // Translation
  const { t } = useTranslation("common");

  return (
    <section className={styles.experience}>
      <div className={styles.experience_h2}>
        <HeaderSection
          text={t("nav-link-2")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div className={styles.experience_data}>
        <AsideBtns
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
        />
        <Gallery>
          <Info />
        </Gallery>
      </div>
    </section>
  );
}
