// Styles
import styles from "./gallery.module.scss";

type Props = {
  children: any;
};

export default function Gallery({ children }: Props) {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_ours}>
        <div className={styles.gallery_main}></div>
        <div className={styles.gallery_text}>Photo gallery:</div>
        <div className={styles.gallery_mini}>
          <div className={styles.gallery_mini_img}></div>
          <div className={styles.gallery_mini_img}></div>
          <div className={styles.gallery_mini_img}></div>
          <div className={styles.gallery_mini_img}></div>
        </div>
      </div>
      {children}
    </div>
  );
}
