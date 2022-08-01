// Styles
import styles from "./code.module.scss";

export const Code_const = ({ specify }: { specify?: string }) => (
  <span className={styles.const}>{specify ? specify : "const"}&nbsp;</span>
);
export const Code_comment = ({ text }: { text: string }) => (
  <span className={styles.comment}>//&nbsp;{text}&nbsp;</span>
);
export const Code_createObject = ({ text }: { text: string }) => (
  <span className={styles.create}>{text}</span>
);
export const Code_equal = () => <span className={styles.equal}>=&nbsp;</span>;
export const Code_new = () => <span className={styles.new}>new&nbsp;</span>;
export const Code_person = () => <span className={styles.person}>Person</span>;
export const Code_iconPurple = ({ icon }: { icon: string }) => (
  <span className={styles.parenthesis}>{icon}</span>
);
export const Code_quote = () => <span className={styles.string_quote}>"</span>;
export const Code_string = ({ text }: { text: string }) => (
  <span className={styles.string}>{text}</span>
);
export const Code_completeString = ({ text }: { text: any }) => (
  <span>
    <Code_quote />
    <Code_string text={text} />
    <Code_quote />
  </span>
);
export const Code_semicolon = ({ specify }: { specify?: string }) => (
  <span className={styles.semicolon}>{specify ? specify : ";"}</span>
);
export const Code_property = ({
  name,
  property,
}: {
  name: string;
  property: string;
}) => (
  <span>
    <span className={styles.semicolon}>{name}</span>
    <span className={styles.create}>.{property}</span>
  </span>
);
export const Code_superGreen = ({ number }: { number: string }) => (
  <span className={styles.string_quote}>{number}</span>
);
