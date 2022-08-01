// Styles
import styles from "./des.module.scss";

// Icons
import Icon from "../../Icons/index";

// Translation
import useTranslation from "next-translate/useTranslation";

type Props = {
  description: () => any;
  challenges: () => any;
  solution: () => any;
  arrayFeatures: Array<string>;
};

export default function Description({
  description,
  challenges,
  solution,
  arrayFeatures,
}: Props) {
  //   Translation
  const { t } = useTranslation("projects/overview");

  return (
    <div className={styles.des}>
      <div className={styles.des_container}>
        <h5>{t("description")}</h5>
        {description()}
      </div>
      <div className={styles.des_container}>
        <h5>{t("challenges")}</h5>
        {challenges()}
      </div>
      <div className={styles.des_container}>
        <h5>{t("solutions")}</h5>
        {solution()}
      </div>
      <div className={styles.des_container}>
        <h5>{t("features")}</h5>
        <ul>
          {arrayFeatures.map((feature: string, index: number) => {
            return (
              <li key={index}>
                <Icon.ITagIcon />
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
