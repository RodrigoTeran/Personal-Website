// Styles
import styles from "./des.module.scss";

// Icons
import Icon from "../../Icons/index";

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
  return (
    <div className={styles.des}>
      <div className={styles.des_container}>
        <h5>Description</h5>
        {description()}
      </div>
      <div className={styles.des_container}>
        <h5>Challenges</h5>
        {challenges()}
      </div>
      <div className={styles.des_container}>
        <h5>Solution</h5>
        {solution()}
      </div>
      <div className={styles.des_container}>
        <h5>Notable features</h5>
        <ul>
          {arrayFeatures.map((feature: string, index: number) => {
            return (
              <li key={index}>
                <Icon.ITagIcon />{feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
