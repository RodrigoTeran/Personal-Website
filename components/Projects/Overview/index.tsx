// Modules
import { useContext } from "react";

// Context
import { GlobalContext } from "../../../pages/_app";

// Translation
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./overview.module.scss";

// Shimmer
import Shimmer from "../../Shimmer/index";

// Icons
import Icon from "../../Icons/index";

type Props = {
  nameOfProject: string;
  srcImg: string;
  linkProject: string | undefined;
  linkRepository: string | undefined;
  maintenance: () => any;
  arrayTech: Array<string>;
  isLeft?: boolean;
  width: number;
  height: number;
  children: any;
};

export default function Overview({
  nameOfProject,
  srcImg,
  linkProject,
  linkRepository,
  maintenance,
  arrayTech,
  isLeft,
  width,
  height,
  children,
}: Props) {
  // Context
  const { setIsModalImgOpen, setModalImgState } = useContext(GlobalContext);

  // Open img
  const openImg = () => {
    if (setIsModalImgOpen && setModalImgState) {
      setModalImgState({
        src: srcImg,
        alt: nameOfProject,
      });
      setIsModalImgOpen(true);
    }
  };

  //   Translation
  const { t } = useTranslation("experience");

  // Styles
  const gap: number = 54;

  return (
    <div className={`${styles.parent} ${isLeft && styles.left}`}>
      {!isLeft && (
        <div
          style={{
            maxWidth: `calc(100% - ${width}px - ${gap}px`,
          }}
          className={styles.children}
        >
          {children}
        </div>
      )}
      <div
        className={`${styles.overview} ${isLeft && styles.left}`}
        style={{
          width: `${width}px`,
        }}
      >
        <h4 className={`${isLeft && styles.left}`}>{nameOfProject}</h4>
        <div
          className={styles.overview_img}
          title={t("open")}
          onClick={openImg}
        >
          <Shimmer
            src={srcImg}
            alt={nameOfProject}
            width={width}
            height={height}
            priority
          />
        </div>
        <div className={styles.overview_links}>
          <div className={linkProject && styles.yes}>
            <Icon.Desktop />
            {linkProject && (
              <a
                href={linkProject}
                title={nameOfProject}
                target="_blank"
                rel="noreferrer noopener"
              >
                Link to the project
              </a>
            )}
            {!linkProject && <span>Link to the project</span>}
          </div>
          <div className={linkRepository && styles.yes}>
            <Icon.CodeBranch />
            {linkRepository && (
              <a
                title={nameOfProject}
                href={linkRepository}
                target="_blank"
                rel="noreferrer noopener"
              >
                Link to the repository
              </a>
            )}
            {!linkRepository && <span>Link to the repository</span>}
          </div>
        </div>
        <div className={`${styles.overview_p} ${isLeft && styles.left}`}>
          {maintenance()}
        </div>
        <div className={styles.overview_tech_title}>Technologies used:</div>
        <div className={styles.overview_ul_container}>
          <ul>
            {arrayTech
              .slice(0, Math.ceil(arrayTech.length / 2))
              .map((tech: string, indexx: number) => {
                return (
                  <li key={indexx}>
                    {isLeft && <Icon.ITagIcon />}
                    {tech}
                    {!isLeft && <Icon.ITagIcon />}
                  </li>
                );
              })}
          </ul>
          <ul>
            {arrayTech
              .slice(Math.ceil(arrayTech.length / 2), arrayTech.length)
              .map((tech: string, indexx: number) => {
                return (
                  <li key={indexx}>
                    {isLeft && <Icon.ITagIcon />}
                    {tech}
                    {!isLeft && <Icon.ITagIcon />}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {isLeft && (
        <div
          style={{
            maxWidth: `calc(100% - ${width}px - ${gap}px`,
          }}
          className={`${styles.children}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
