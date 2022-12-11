// Modules
import { useRef } from "react";

// Styles
import styles from "./info.module.scss";
import {INDEXES} from "../experience.types";

// Translation
import useTranslation from "next-translate/useTranslation";

// Icons
import Icon from "../../Icons";

// Animations hook
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

type Props = {
  projectIndex: INDEXES;
};
export default function Info({ projectIndex }: Props) {
  // Translation
  const { t } = useTranslation("experience");

  // Links
  const links: Array<string> = [
    "https://bimas.com.mx/",
    "https://www.dessilumindustrial.com/",
    "https://uniformate-bien.vercel.app/",
    "https://leadsales.io/",
    "https://teamplace.netlify.app/",
    "https://www.evolutel.com.mx/",
  ];

  // Animations scroll
  // Ref of component
  const refInfo = useRef<any>(null);

  useAnimationsScroll({
    componentsList: [
      {
        element: refInfo,
        screenPercentage: 0.445,
        notAppearClass: styles.not
      }
    ]
  });

  return (
    <div className={`${styles.info}`} ref={refInfo}>
      <h3>{t(`work-${projectIndex + 1}-info-title`)}</h3>
      <div>
        <p className={styles.diffetentP}>
          {t(`work-${projectIndex + 1}-info-des`)}
        </p>
        <ul>
          {t(`work-${projectIndex + 1}-info-li`)
            .split(",")
            .map((li: string, index: number) => {
              return (
                <li key={index}>
                  {li}
                  <Icon.ITagIcon />
                </li>
              );
            })}
        </ul>
        <span>
          <a
            href={links[projectIndex]}
            target="_blank"
            rel="noreferrer noopener"
            title={t(`work-${projectIndex + 1}-info-a`)}
          >
            Link <Icon.Link />
          </a>
        </span>
      </div>
    </div>
  );
}
