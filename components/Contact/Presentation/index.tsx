import { Fragment } from "react";
import styles from "./presentation.module.scss";

// Components
import ImageShimmer from "../../Shimmer/index";

const Presentation = () => {
  const title: Array<string> = "Hi,-tell me about-your project".split("-");

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
      <div className={styles.present_subtitle}>
        Lets create something together 🤟
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
            Remember that you can also contact me
          </div>
          <div className={styles.present_me_text_aqua}>in my social media</div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
