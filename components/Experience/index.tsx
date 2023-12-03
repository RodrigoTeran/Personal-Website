// Modules
import { useState, useContext } from "react";
import { GlobalContext } from "../../pages/_app";

// Styles
import styles from "./experience.module.scss";
import {INDEXES} from "./experience.types";

// Components
import AsideBtns from "./AsideBtns/index";
import Gallery from "./Gallery/index";
import Info from "./Info/index";
import HeaderSection from "../Sections/index";

// Translation
import useTranslation from "next-translate/useTranslation";

export default function Experience() {
  const { experienceRef } = useContext(GlobalContext);

  // Animations
  const percentage: number = 0.45;

  // State
  const [projectIndex, setProjectIndex] = useState<INDEXES>(6);

  // Translation
  const { t } = useTranslation("common");

  return (
    <section ref={experienceRef} className={styles.experience}>
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
        <Gallery projectIndex={projectIndex}>
          <Info projectIndex={projectIndex} />
        </Gallery>
      </div>
    </section>
  );
}
