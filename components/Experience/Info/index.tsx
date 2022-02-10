// Styles
import styles from "./info.module.scss";

// Translation
import useTranslation from "next-translate/useTranslation";

// Icons
import Icon from "../../Icons";

type Props = {
  projectIndex: 0 | 1 | 2 | 3 | 4;
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
  ];

  return (
    <div className={styles.info}>
      <h3>{t(`work-${projectIndex + 1}-info-title`)}</h3>
      <div>
        <p className={projectIndex != 4 ? styles.diffetentP : ""}>
          {t(`work-${projectIndex + 1}-info-des`)}
        </p>

        {projectIndex != 4 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
