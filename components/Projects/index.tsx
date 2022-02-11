// Modules
import { useState } from "react";

// Styles
import styles from "./projects.module.scss";

// Components
import HeaderSections from "../Sections/index";
import Menu from "./Menu/index";

// Translation
import useTranslation from "next-translate/useTranslation";

export default function Projects() {
  // Animations
  const percentage: number = 0.45;

  // Translation
  const { t } = useTranslation("common");

  // State of projects
  const [choosenProject, setChoosenProject] = useState<0 | 1 | 2 | 3>(0);

  return (
    <section className={styles.projects}>
      <div>
        <HeaderSections
          text={t("nav-link-4")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div  className={styles.projects_container}>
        <Menu
          choosenProject={choosenProject}
          setChoosenProject={setChoosenProject}
        />
      </div>
    </section>
  );
}
