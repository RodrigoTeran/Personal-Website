// Modules
import { useState, useRef, useContext, useEffect } from "react";

// Global context
import { GlobalContext } from "../../../pages/_app";

// Styles
import styles from "./gallery.module.scss";
import { INDEXES, arrIndexesImages } from "../experience.types";

// Translation
import useTranslation from "next-translate/useTranslation";

// Animations hook
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Components
import { ImagesMain, ImagesMini } from "./Images/index";

type Props = {
  children: any;
  projectIndex: INDEXES;
};

export default function Gallery({ children, projectIndex }: Props) {
  // Translation
  const { t } = useTranslation("experience");

  // Ref of main image
  const refMain = useRef<any>(null);

  // Ref of first mini
  const refMini = useRef<any>(null);

  // State for images
  const [dimensionsMain_width, setDimensionsMain_width] = useState<number>(0);
  const [dimensionsMain_height, setDimensionsMain_height] = useState<number>(0);

  const [dimensionsMinis_width, setDimensionsMinis_width] = useState<number>(0);
  const [dimensionsMinis_height, setDimensionsMinis_height] =
    useState<number>(0);

  useEffect(() => {
    handleDimensions();
    window.addEventListener("resize", handleDimensions);
    return () => {
      window.removeEventListener("resize", handleDimensions);
    };
  }, [projectIndex]);
  
  const handleDimensions = (): void => {
    handleDimensionsOnlyData();

    // Because transitions have a delay and
    // sometimes the resize listener is not enough...
    const timeOut = setTimeout(() => {
      handleDimensionsOnlyData();
      clearTimeout(timeOut);
    }, 1500);
  };

  const handleDimensionsOnlyData = (): void => {
    const objectMain: any = refMain.current;
    const objectMini: any = refMini.current;

    // Main
    if (!objectMain) {
      return;
    }
    let widthMain = objectMain.clientWidth;
    let heightMain = objectMain.clientHeight;
    setDimensionsMain_width(widthMain);
    setDimensionsMain_height(heightMain);

    // Mini
    if (!objectMini) {
      return;
    }
    let widthMini = objectMini.clientWidth;
    let heightMini = objectMini.clientHeight;
    setDimensionsMinis_width(widthMini);
    setDimensionsMinis_height(heightMini);
  };

  // Dimensions of window to take ss: 1660 x 1073

  // Context
  const { setModalImgState, setIsModalImgOpen } = useContext(GlobalContext);

  // Open img
  const openImg = (src: string, alt: string) => {
    if (setModalImgState && setIsModalImgOpen) {
      setModalImgState({
        src,
        alt,
      });
      setIsModalImgOpen(true);
    }
  };

  // Animations scroll
  // Ref of component
  const refGalleryOurs = useRef<any>(null);

  useAnimationsScroll({
    componentsList: [
      {
        element: refGalleryOurs,
        screenPercentage: 0.445,
        notAppearClass: styles.not,
      },
    ]
  });

  return (
    <div className={styles.gallery}>
      <div className={`${styles.gallery_ours}`} ref={refGalleryOurs}>
        <div
          className={styles.gallery_main}
          ref={refMain}
          onClick={() => {
            openImg(
              `/images/experience/work-${projectIndex + 1}.png`,
              t(`work-${projectIndex + 1}-info-title`)
            );
          }}
        >
          <ImagesMain
            projectIndex={projectIndex}
            dimensionsMain_width={dimensionsMain_width}
            dimensionsMain_height={dimensionsMain_height}
          />
        </div>
        {(projectIndex != 3 &&
          projectIndex != 5 &&
          projectIndex != 6) && (
          <>
            <div className={styles.gallery_text}>{t("photos")}</div>
            <div className={styles.gallery_mini}>
              {arrIndexesImages.map((element: any) => {
                return (
                  <div
                    key={element}
                    title={t("open")}
                    className={styles.gallery_mini_img}
                    ref={element === 1 ? refMini : null}
                    onClick={() => {
                      openImg(
                        `/images/experience/work-${projectIndex + 1}-mini-${element}.png`,
                        t(`work-${projectIndex + 1}-info-title`)
                      );
                    }}
                  >
                    <ImagesMini
                      projectIndex={projectIndex}
                      dimensionsMinis_width={dimensionsMinis_width}
                      dimensionsMinis_height={dimensionsMinis_height}
                      liIndex={element}
                    />
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
