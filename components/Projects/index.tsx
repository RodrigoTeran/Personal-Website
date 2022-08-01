// Modules
import { useState, useContext } from "react";
import { GlobalContext } from "../../pages/_app";

// Styles
import styles from "./projects.module.scss";

// Components
import HeaderSections from "../Sections/index";
import Menu from "./Menu/index";

// Translation
import useTranslation from "next-translate/useTranslation";

// Projects
import LearnToDrive from "./Projects/LearnToDrive/index";
import Diet from "./Projects/Food/index";
import DogFinder from "./Projects/Dog/index";
import DarkProgrammingLanguage from "./Projects/Dark/index";
import Fourier from "./Projects/Fourier/index";

export default function Projects() {
  const { projectsRef } = useContext(GlobalContext);

  // Animations
  const percentage: number = 0.45;

  // Translation
  const { t } = useTranslation("common");

  // State of projects
  const [choosenProject, setChoosenProject] = useState<0 | 1 | 2 | 3>(0);

  return (
    <section ref={projectsRef} className={styles.projects}>
      <div>
        <HeaderSections
          text={t("nav-link-4")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div className={styles.projects_container}>
        <Menu
          choosenProject={choosenProject}
          setChoosenProject={setChoosenProject}
        />
        {/* Proyectos... */}
        <LearnToDrive choosenProject={choosenProject} />
        <Diet choosenProject={choosenProject} />
        <DogFinder choosenProject={choosenProject} />
        <DarkProgrammingLanguage choosenProject={choosenProject} />
        <Fourier choosenProject={choosenProject} />
      </div>
    </section>
  );
}
