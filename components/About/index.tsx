// Modules
import { useRef } from "react";

// Styles
import styles from "./about.module.scss";

// Hook
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

// Transalation
import useTranslation from "next-translate/useTranslation";

// Components
import Code from "./Code/index";
import Question from "./Questions/index";

export default function AboutMe() {
  // Ref
  const aboutInfoRef = useRef<any>(null);

  const percentage: number = 0.65;
  const delay: number = 200;

  // Hook animation
  useAnimationsScroll({
    componentsList: [
      {
        element: aboutInfoRef,
        screenPercentage: percentage,
        notAppearClass: styles.not,
      },
    ],
  });

  // Transaltion
  const { t, lang } = useTranslation("about");

  return (
    <section className={styles.about}>
      <Code />
      <div ref={aboutInfoRef} className={`${styles.about_info}`}>
        <Question
          style={{
            ["--delay-number" as any]: `${0 * delay}ms`,
          }}
          align="left"
          question={t("question-1")}
        >
          <p>{t("answer-1")}</p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${1 * delay}ms`,
          }}
          align="right"
          question={t("question-2")}
        >
          <p>
            {lang == "es" && (
              <>
                {t("answer-2")}
                <br />
                <span>{t("goto-experience")}</span>
              </>
            )}
            {lang == "en" && (
              <>
                {t("answer-2")}&nbsp;
                <span>{t("goto-experience")}</span>
              </>
            )}
          </p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${2 * delay}ms`,
          }}
          align="left"
          question={t("question-3")}
        >
          <p>
            {t("answer-3")}
            <br />
            <span>{t("goto-projects")}</span>
          </p>
        </Question>
      </div>
    </section>
  );
}
