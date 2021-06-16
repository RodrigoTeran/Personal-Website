import { useState } from "react";

// Styles
import styles from "./type.module.scss";

// Hooks
import { useTyping } from "../../../hooks/useTyping";

export default function Typing() {
  const [word, setWord] = useState<string>("");
  const [isWriting, setIsWriting] = useState<boolean>(true);
  useTyping(
    [
      "Desarrollador de Aplicaciones Web",
      "Entusiasta de la Tecnología",
      "Amante de los libros",
    ],
    setWord,
    setIsWriting
  );
  return (
    <div className={styles.type}>
      <div className={styles.type_word}>
        {word.split("").map((char, index) => {
          return (
            <span
              key={index}
              style={{
                marginRight: char == " " ? "5px" : "",
              }}
            >
              {char}
            </span>
          );
        })}
        <span
          className={`${styles.type_word_line} ${
            isWriting ? "" : styles.isNoWriting
          }`}
        ></span>
      </div>
    </div>
  );
}
