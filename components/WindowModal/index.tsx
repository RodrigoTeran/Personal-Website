// Styles
import styles from "./modal.module.scss";

type Props = {
  children: any;
  extraClass?: string;
};

export default function WindowModal({ children, extraClass }: Props) {
  return (
    <div className={`${styles.modal} ${extraClass ? extraClass : ""}`}>
      {children}
    </div>
  );
}
