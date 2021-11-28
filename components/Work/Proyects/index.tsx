import { useState, useRef } from "react";

// Images
import LeadsalesImage from "../../../public/images/leadsales.png";

// Languages
import useTranslation from "next-translate/useTranslation";

// Functions
import { goto } from "../../../functions/goTo";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Styles
import styles from "../work.module.scss";

// Components
import Years from "../Years/index";
import Info from "../Info/index";
import Proyect from "../../Proyects/Proyect/index";

export default function Work() {
  // Languages
  const { t } = useTranslation("work");

  // Proyect state
  const [imgSrc, setImgSrc] = useState<any>(LeadsalesImage);
  const [title, setTitle] = useState<string>(t("leadsales"));
  const [techStack, setTechStack] = useState<Array<string>>([
    t("leadsales-from"),
    "-",
    t("leadsales-to"),
  ]);
  const [link, setLink] = useState<string>("https://leadsales.io/en/");
  const [alt, setAlt] = useState<string>(t("leadsales"));
  const [childrenIndex, setChildrenIndex] = useState<number>(0);

  // Proyect Ref
  const proyectRef = useRef(null);

  const changeProyect = (
    imgSrc_: any,
    title_: string,
    techStack_: Array<string>,
    link_: string,
    alt_: string,
    childrenIndex_: number
  ) => {
    setImgSrc(imgSrc_);
    setTitle(title_);
    setTechStack(techStack_);
    setLink(link_);
    setAlt(alt_);
    setChildrenIndex(childrenIndex_);

    goto(proyectRef);
  };

  // Refs for animations
  const h2Ref = useRef(null);

  // Animations scroll
  useAnimationsScroll([h2Ref], 0.6, "notAppear_bottomToTop");

  return (
    <>
      <h2 ref={h2Ref} className={`${styles.work_h2}`}>
        {t("experience")}
      </h2>
      <div className={styles.sections}>
        <Years
          years={3}
          text={
            <>
              <p>{t("years-1")}</p>
              <p>{t("years-2")}</p>
              <p>{t("years-3")}</p>
            </>
          }
        ></Years>
        <Info changeProyect={changeProyect}></Info>
      </div>
      <div className={styles.sections} ref={proyectRef}>
        <Proyect
          imageSrc={imgSrc}
          title={title}
          techStack={techStack}
          link={link}
          alt={alt}
        >
          {childrenIndex == 0 ? (
            <>
              {t("leadsales-des-1")}
              &nbsp;
              <b>{t("leadsales-des-2")}</b>
              &nbsp;
              {t("leadsales-des-3")}
            </>
          ) : childrenIndex == 1 ? (
            <>
              {t("bimas-des-1")}
              &nbsp;
              <b>{t("bimas-des-2")}</b>
              {t("bimas-des-3")}
            </>
          ) : childrenIndex == 2 ? (
            <>
              {t("uniforms-des-1")}
              &nbsp;
              <b>{t("uniforms-des-2")}</b>
              &nbsp;
              {t("uniforms-des-3")}
            </>
          ) : null}
        </Proyect>
      </div>
    </>
  );
}
