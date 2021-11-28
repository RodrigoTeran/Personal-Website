import { useRef } from "react";

// Styles
import styles from "./skills.module.scss";

// Languages
import useTranslation from "next-translate/useTranslation";

// Components
import Quotes from "../../About/Quotes/index";
import Mountain from "./Mountain/index";

// Skills
import { frontend, backend, servicios } from "./skills";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

export default function Skills() {
  // Refs for animations
  const mountainsRef = useRef(null);

  // Animation
  useAnimationsScroll([mountainsRef], 0.1, "notAppear_mountains");

  // Languages
  const { t } = useTranslation("work");

  return (
    <section className={styles.skills} ref={mountainsRef}>
      <div className={styles.quotes}>
        <Quotes
          text={t("quotes")}
          person="Alan Kay"
          link="https://www.google.com/search?q=alan+kay&source=hp&ei=b6nWYOG5FcnYsQWNxIWYAQ&iflsig=AINFCbYAAAAAYNa3f7syFJVStn-fw2zoxGAyXcNRJiG0&oq=alan+kay&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEJMCMgIIADICCAAyAggAMgIIADICCAAyAggAMgQILhAKMgIIAFCOA1iOA2CvBGgAcAB4AIABb4gBb5IBAzAuMZgBAKABAqABAaoBB2d3cy13aXo&sclient=gws-wiz&ved=0ahUKEwihrf3Wt7TxAhVJbKwKHQ1iARMQ4dUDCAc&uact=5"
        />
      </div>
      <div className={styles.mountains}>
        <Mountain
          color="#00B69C"
          arrayImgs={frontend}
          title={t("mountain-1")}
          zIndex={2}
          x={0}
          y={25}
          delay={800}
        />
        <Mountain
          color="#00A189"
          arrayImgs={backend}
          title={t("mountain-2")}
          zIndex={0}
          x={20}
          y={0}
          delay={0}
        />
        <Mountain
          color="#FFF"
          arrayImgs={servicios}
          title={t("mountain-3")}
          zIndex={1}
          x={40}
          y={40}
          delay={400}
        />
      </div>
    </section>
  );
}
