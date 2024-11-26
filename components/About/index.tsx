// Modules
import { useRef, useContext } from "react";
import { GlobalContext } from "../../pages/_app";

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
  const { aboutMeRef, goTo } = useContext(GlobalContext);

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
        notAppearClass: styles.not
      }
    ]
  });

  // Transaltion
  const { t, lang } = useTranslation("about");

  return (
    <section ref={aboutMeRef} className={styles.about}>
      <Code />
      <div ref={aboutInfoRef} className={`${styles.about_info}`}>
        <Question
          style={{
            ["--delay-number" as any]: `${0 * delay}ms`
          }}
          align="left"
          question={t("question-1")}
        >
          <p>{t("answer-1")}</p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${1 * delay}ms`
          }}
          align="right"
          question={t("question-2")}
        >
          <p>
            {lang == "es" && (
              <>
                <div>
                  {t("answer-2")}
                </div>
                <div
                  className={styles.link_to_click}
                  onClick={() => {
                    if (goTo) goTo("experience");
                  }}
                >
                  {t("goto-experience")}
                </div>
              </>
            )}
            {lang == "en" && (
              <>
                <div>
                  {t("answer-2")}&nbsp;
                </div>
                <div
                  className={styles.link_to_click}
                  onClick={() => {
                    if (goTo) goTo("experience");
                  }}
                >
                  {t("goto-experience")}
                </div>
              </>
            )}
          </p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${2 * delay}ms`
          }}
          align="left"
          question={t("question-3")}
        >
          <p>
            <div>
              {t("answer-3")}
            </div>
            <div
              className={styles.link_to_click}
              onClick={() => {
                if (goTo) goTo("projects");
              }}
            >
              {t("goto-projects")}
            </div>
          </p>
        </Question>
      </div>
    </section>
  );
}
