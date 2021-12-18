import { useContext } from "react";

// Languages
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./proyects.module.scss";
import stylesAbout from "../About/about.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import ProyectTech from "./ProyectTech/index";

// Images
import dogFinderImg from "../../public/images/dogFinderMx.jpg";
import darkImg from "../../public/images/dark-programming.png";
import fourierImg from "../../public/images/fourier.png";

export default function Proyects() {
  const { workRef } = useContext(AppContext);

  // Languages
  const { t } = useTranslation("proyects");

  return (
    <article className={`${styles.proyects} sections`} ref={workRef}>
      <h2 className={`${stylesAbout.about_h2} ${styles.proyects_h2}`}>
        {t("proyects")}
      </h2>
      <ProyectTech
        title={t("dogfinder-title")}
        imgSrc={dogFinderImg}
        linkProyect="https://dogfinder.com.mx/"
        host={
          <p>
            {t("dogfinder-host-1")}
            &nbsp;
            <a href="https://www.heroku.com/" target="blank">
              {t("dogfinder-host-2")}
            </a>
            {t("dogfinder-host-3")}
          </p>
        }
        techStack={[
          "ReactJS",
          "NodeJS",
          "MongoDB",
          "Flask",
          "OpenCV",
          "Stripe",
          "GoogleMapsAPI",
          "Sass",
        ]}
        description={
          <p>
            {t("dogfinder-des-1")} <span>{t("dogfinder-des-2")}</span>
          </p>
        }
        difficulties={
          <p>
            {t("dogfinder-hard-1")}
            &nbsp;
            <span>{t("dogfinder-hard-2")}</span>
            {t("dogfinder-hard-3")}
          </p>
        }
        solution={
          <p>
            {t("dogfinder-solution-1")} <span>{t("dogfinder-solution-2")}</span>
          </p>
        }
        notableFeatures={[
          t("dogfinder-features-1"),
          t("dogfinder-features-2"),
          t("dogfinder-features-3"),
          t("dogfinder-features-4"),
          t("dogfinder-features-5"),
          t("dogfinder-features-6"),
        ]}
      />
      <hr />
      <ProyectTech
        title={t("dark-title")}
        imgSrc={darkImg}
        linkProyect="https://dark-language.vercel.app/"
        linkSource="https://github.com/RodrigoTeran/Dark-Programming-Language"
        host={
          <p>
            {t("dark-host-1")}
            &nbsp;
            <a href="https://vercel.com/" target="blank">
              {t("dark-host-2")}
            </a>
          </p>
        }
        techStack={["ReactJS", "Moo", "Nearley", "Sass"]}
        description={
          <p>
            {t("dark-des-1")} <span>{t("dark-des-2")}</span> {t("dark-des-3")}
          </p>
        }
        difficulties={<p>{t("dark-hard-1")}</p>}
        solution={
          <p>
            {t("dark-solution-1")}
            &nbsp;
            <span>{t("dark-solution-2")}</span>
            {t("dark-solution-3")}
          </p>
        }
        notableFeatures={[
          t("dark-features-1"),
          t("dark-features-2"),
          t("dark-features-3"),
          t("dark-features-4"),
          t("dark-features-5"),
          t("dark-features-6"),
        ]}
      />
      <hr />
      <ProyectTech
        title={t("fourier-title")}
        imgSrc={fourierImg}
        linkProyect="https://fourier-transforms-canvas.vercel.app/"
        linkSource="https://github.com/RodrigoTeran/Fourier-Transforms-Canvas"
        host={
          <p>
            {t("fourier-host-1")}
            &nbsp;
            <a href="https://vercel.com/" target="blank">
              {t("fourier-host-2")}
            </a>
          </p>
        }
        techStack={["ReactJS", "TypeScript", "Sass", t("fourier-stack")]}
        description={
          <p>
            {t("fourier-des-1")}
            &nbsp;
            <span>{t("fourier-des-2")}</span>
            {t("fourier-des-3")}
          </p>
        }
        difficulties={
          <p>
            {t("fourier-hard-1")}
            &nbsp;
            <span>{t("fourier-hard-2")}</span>
            &nbsp;
            {t("fourier-hard-3")}
          </p>
        }
        solution={
          <p>
            {t("fourier-solution-1")}
            &nbsp;
            <span>{t("fourier-solution-2")}</span>
            {t("fourier-solution-3")}
          </p>
        }
        notableFeatures={[t("fourier-features-1"), t("fourier-features-2")]}
      />
    </article>
  );
}
