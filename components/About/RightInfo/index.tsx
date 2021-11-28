import Image from "next/image";
import { useRef } from "react";

// Languages
import useTranslation from "next-translate/useTranslation";

// Images
import profilePic from "../../../public/images/itesm_logo.png";

// Styles
import styles from "./right.module.scss";

// Animations Scroll
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

export default function RightInfo() {
  // Refs for animations
  const emInterests = useRef(null);
  const emStudy = useRef(null);
  const emHobbies = useRef(null);

  const pInterests = useRef(null);
  const pStudy = useRef(null);
  const imgStudy = useRef(null);
  const pHobbies = useRef(null);
  const ulHobbies = useRef(null);

  useAnimationsScroll(
    [emInterests, emStudy, emHobbies],
    0.6,
    "notAppear_leftToRight"
  );

  useAnimationsScroll(
    [pInterests, pStudy, imgStudy, pHobbies, ulHobbies],
    0.6,
    "notAppear_topToBottom"
  );

  // Languages
  const { t } = useTranslation("about");

  return (
    <section className={styles.right}>
      <em ref={emInterests} className={`${styles.em_left} ${styles.em}`}>
        {t("right-section-1")}
      </em>
      <br />
      <p ref={pInterests}>
        {t("right-section-1-p-1")}
        &nbsp;
        <b>{t("right-section-1-p-ai")}</b>
        &nbsp;
        {t("right-section-1-p-2")}
      </p>
      <em ref={emStudy} className={`${styles.em_right} ${styles.em}`}>
        {t("right-section-2")}
      </em>
      <br />
      <p ref={pStudy}>
        {t("right-section-2-p")}
        &nbsp;
        <a href="https://tec.mx/en/queretaro-campus" target="blank">
          {t("right-section-2-a")}
        </a>
      </p>
      <div ref={imgStudy} className={styles.img_container}>
        <Image
          src={profilePic}
          alt="Tecnológico de Monterrey"
          width={250}
          height={100}
          priority
          className={styles.img}
        />
      </div>
      <em ref={emHobbies} className={`${styles.em_left} ${styles.em}`}>
        {t("right-section-3")}
      </em>
      <br />
      <p ref={pHobbies}>{t("right-section-3-p")}</p>
      <ul ref={ulHobbies}>
        <li>
          {t("right-section-3-li-1")}
          &nbsp;
          <a
            href="https://www.google.com/search?q=que+es+la+calistenia&oq=que+es+la+calistenia&aqs=chrome..69i57.222j0j1&sourceid=chrome&ie=UTF-8"
            target="blank"
          >
            {t("right-section-3-li-1-a")}
          </a>
        </li>
        <li>{t("right-section-3-li-2")}</li>
        <li>{t("right-section-3-li-3")}</li>
      </ul>
    </section>
  );
}
