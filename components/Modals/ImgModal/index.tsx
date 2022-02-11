// Modules
import { useContext, useEffect, useState } from "react";

// Translation
import useTranslation from "next-translate/useTranslation";

// Global Context
import { GlobalContext } from "../../../pages/_app";

// Styles
import styles from "./imgModal.module.scss";

// Icons
import Icon from "../../Icons/index";

// Shimmer
import Shimmer from "../../Shimmer/index";

export type Props = {
  src: string;
  alt: string;
};

export default function ImgModal() {
  // Context
  const { isModalImgOpen, setIsModalImgOpen, modalImgState, setModalImgState } =
    useContext(GlobalContext);

  // Dimensions
  const [widthImg, setWidthImg] = useState<number>(0);
  const [heightImg, setHeightImg] = useState<number>(0);

  useEffect(() => {
    handleResize();
    handleStyleOverflow();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isModalImgOpen]);

  const handleStyleOverflow = () => {
    const body: HTMLCollectionOf<HTMLBodyElement> =
      document.getElementsByTagName("body");
    if (isModalImgOpen) {
      if (body.length > 0) {
        body[0].style.overflowY = "hidden";
      }
    } else {
      if (body.length > 0) {
        body[0].style.overflowY = "auto";
      }
    }
  };

  const handleResize = () => {
    setWidthImg(window.innerWidth * 0.9);
    setHeightImg(window.innerHeight * 0.9);
  };

  // Translation
  const { t } = useTranslation("common");

  return (
    <>
      {modalImgState && isModalImgOpen && (
        <div className={styles.img}>
          <div
            onClick={() => {
              if (setIsModalImgOpen) setIsModalImgOpen(false);
              if (setModalImgState)
                setModalImgState({
                  src: "",
                  alt: "",
                });
            }}
            className={styles.img_times}
            title={t("close")}
          >
            <Icon.Times />
          </div>
          <div className={styles.img_container}>
            <Shimmer
              src={modalImgState.src}
              alt={modalImgState.alt}
              width={widthImg}
              height={heightImg}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
