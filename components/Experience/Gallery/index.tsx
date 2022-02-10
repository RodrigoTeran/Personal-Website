// Types
import { useEffect } from "react";

// Modules
import { useState, useRef } from "react";

// Styles
import styles from "./gallery.module.scss";

// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import { ImagesMain, ImagesMini } from "./Images/index";

type Props = {
  children: any;
  projectIndex: 0 | 1 | 2 | 3 | 4;
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
  }, []);

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

    // If one of them is null
    if (!objectMain || !objectMini) return;

    // Main
    let widthMain = objectMain.clientWidth;
    let heightMain = objectMain.clientHeight;

    // Mini
    let widthMini = objectMini.clientWidth;
    let heightMini = objectMini.clientHeight;

    // Main
    setDimensionsMain_width(widthMain);
    setDimensionsMain_height(heightMain);

    // Mini
    setDimensionsMinis_width(widthMini);
    setDimensionsMinis_height(heightMini);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_ours}>
        <div className={styles.gallery_main} ref={refMain}>
          <ImagesMain
            projectIndex={projectIndex}
            dimensionsMain_width={dimensionsMain_width}
            dimensionsMain_height={dimensionsMain_height}
          />
        </div>
        {projectIndex != 4 && projectIndex != 3 && (
          <>
            <div className={styles.gallery_text}>{t("photos")}</div>
            <div className={styles.gallery_mini}>
              <div
                title={t("open")}
                className={styles.gallery_mini_img}
                ref={refMini}
              >
                <ImagesMini
                  projectIndex={projectIndex}
                  dimensionsMinis_width={dimensionsMinis_width}
                  dimensionsMinis_height={dimensionsMinis_height}
                  liIndex={1}
                />
              </div>
              <div title={t("open")} className={styles.gallery_mini_img}>
                <ImagesMini
                  projectIndex={projectIndex}
                  dimensionsMinis_width={dimensionsMinis_width}
                  dimensionsMinis_height={dimensionsMinis_height}
                  liIndex={2}
                />
              </div>
              <div title={t("open")} className={styles.gallery_mini_img}>
                <ImagesMini
                  projectIndex={projectIndex}
                  dimensionsMinis_width={dimensionsMinis_width}
                  dimensionsMinis_height={dimensionsMinis_height}
                  liIndex={3}
                />
              </div>
              <div title={t("open")} className={styles.gallery_mini_img}>
                <ImagesMini
                  projectIndex={projectIndex}
                  dimensionsMinis_width={dimensionsMinis_width}
                  dimensionsMinis_height={dimensionsMinis_height}
                  liIndex={4}
                />
              </div>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
