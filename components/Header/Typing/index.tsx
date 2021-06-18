import { useState } from "react";
import { motion } from "framer-motion";

// Variants
import { imageVariants } from "../../Variants/Header";

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
    setIsWriting,
    100,
    60,
    10,
    40
  );
  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      className={styles.type}
    >
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
    </motion.div>
  );
}
