// Modules
import { useRef } from "react";

// Styles
import styles from "./skills.module.scss";

// Components
import HeaderSections from "../Sections/index";
import Mountain from "./Mountain/index";

// Translation
import useTranslation from "next-translate/useTranslation";

// Animation hook
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

// Data
import { frontend, backend, servicios } from "./skills";

export default function Skills() {
  // Animations
  const percentage: number = 0.45;

  // Ref Mountain
  const refMountains = useRef<any>(null);

  useAnimationsScroll({
    componentsList: [
      {
        element: refMountains,
        screenPercentage: percentage,
        notAppearClass: styles.not,
      },
    ],
  });

  // Translation
  const { t } = useTranslation("common");

  return (
    <section className={styles.skills}>
      <div>
        <HeaderSections
          text={t("nav-link-3")}
          screenPercentage={percentage + 0.13}
        />
      </div>
      <div className={styles.skills_mountains} ref={refMountains}>
        <Mountain
          color="mountain-1"
          arrayImgs={frontend}
          title={"Frontend"}
          zIndex={2}
          x={0}
          y={25}
          delay={800}
        />
        <Mountain
          color="mountain-2"
          arrayImgs={backend}
          title={"Backend"}
          zIndex={0}
          x={20}
          y={0}
          delay={0}
        />
        <Mountain
          color="white"
          arrayImgs={servicios}
          title={"Cloud"}
          zIndex={1}
          x={40}
          y={40}
          delay={400}
        />
      </div>
    </section>
  );
}
