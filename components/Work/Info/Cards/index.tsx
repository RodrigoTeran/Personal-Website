// Styles
import styles from "./cards.module.scss";

type Props = {
  text: string;
  callback: () => any;
  isSelected: boolean;
  index: number
};

export default function Card({ text, callback, isSelected, index }: Props) {
  var width = 280;
  return (
    <button
      className={`${styles.card} ${isSelected ? styles.card_open : ""}`}
      onClick={callback}
      style={{
        left: index == 0 ? 0 : index * width + index * 20,
        width
      }}
    >
      <div>
        {isSelected && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" />
          </svg>
        )}
        {!isSelected && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" />
          </svg>
        )}
      </div>
      <span className={styles.span}>{text}</span>
      <span className={styles.span_work}>Ver trabajo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/></svg></span>
    </button>
  );
}
