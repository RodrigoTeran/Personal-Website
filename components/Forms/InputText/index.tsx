// Styles
import { Dispatch, SetStateAction } from "react";
import styles from "./inputText.module.scss";

type Props = {
  extraClass?: string;
  labelText: string;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  name?: string;
  id: string;
  type: "email" | "password" | "text"
};

export default function InputText({
  extraClass,
  labelText,
  setValue,
  value,
  name,
  id,
  type
}: Props) {
  return (
    <div className={`${styles.text_container} ${extraClass ? extraClass : ""}`}>
      <label className={`${styles.text_label}`} htmlFor={id}>{labelText}</label>
      <input
        className={`${styles.text}`}
        type={type}
        name={name ? name : ""}
        id={id}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </div>
  );
}
