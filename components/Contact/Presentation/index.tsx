// Translation
import useTranslation from "next-translate/useTranslation";

// Modules
import { Fragment } from "react";
import styles from "./presentation.module.scss";

// Components
import ImageShimmer from "../../Shimmer/index";

const Presentation = () => {
  // Language
  const { t } = useTranslation("contact");

  const title: Array<string> = t("presentation-title").split("-");

  return (
    <div className={styles.present}>
      <div className={styles.present_title}>
        {title.map((text: string, index: number) => {
          return (
            <Fragment key={index}>
              {text}
              {index < title.length - 1 && <br />}
            </Fragment>
          );
        })}
      </div>
      <div>
        <div className={styles.present_subtitle}>
          {t("presentation-subtitle")}&nbsp;🤟
        </div>
        <div className={styles.present_me}>
          <div className={styles.present_me_img}>
            <ImageShimmer
              src="/images/me.jpg"
              alt="Rodrigo Terán"
              width={43}
              height={43}
              priority
              quality={75}
            />
          </div>
          <div className={styles.present_me_text}>
            <div className={styles.present_me_text_white}>
              {t("presentation-contact-1")}
            </div>
            <div className={styles.present_me_text_aqua}>
              {t("presentation-contact-2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
