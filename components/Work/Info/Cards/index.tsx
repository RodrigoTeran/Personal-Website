// Styles
import styles from "./cards.module.scss";

// Languages
import useTranslation from "next-translate/useTranslation";

type Props = {
  text: string;
  callback: () => any;
  isSelected: boolean;
  index: number;
};

export default function Card({ text, callback, isSelected, index }: Props) {
  var width = 300;

  // Languages
  const { t } = useTranslation("work");

  return (
    <button
      className={`${styles.card} ${isSelected ? styles.card_open : ""}`}
      onClick={callback}
      style={{
        left: index == 0 ? 0 : index * width + index * 0,
        width,
      }}
    >
      <span className={styles.span}>{text}</span>
      <span className={styles.span_work}>
        {t("info-cards-view-job")}
        &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
        </svg>
      </span>
    </button>
  );
}
