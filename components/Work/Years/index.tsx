// Styles
import styles from "./years.module.scss";

type Props = {
  years: number;
  text_1: string;
  text_2: string;
  text_3: string;
};

export default function Years({ years, text_1, text_2, text_3 }: Props) {
  return (
    <section className={styles.years}>
      <b>
        {years}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </b>
      <br />
      <div>
        <p>{text_1}</p>
        <p>{text_2}</p>
        <p>{text_3}</p>
      </div>
    </section>
  );
}
