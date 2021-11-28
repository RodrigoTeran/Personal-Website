import { motion } from "framer-motion";

// Languages
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./title.module.scss";

// Variants
import { sentenceVariants, letterVariants } from "../../Variants/Sentence";

export default function Title() {
  // Languages
  const { t } = useTranslation("header");

  const title1 = t("name");
  const title2 = "Terán";
  return (
    <motion.h1
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      className={styles.h1}
    >
      <div>
        {title1.split("").map((char, index) => {
          return (
            <motion.span
              whileHover={{ y: -30 }}
              variants={letterVariants}
              key={index}
              style={{
                marginRight: index == 2 ? "20px" : "",
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
      <div>
        {title2.split("").map((char, index) => {
          return (
            <motion.span
              whileHover={{ y: -30 }}
              variants={letterVariants}
              key={index}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.h1>
  );
}
