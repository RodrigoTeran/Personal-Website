// Modules
import { motion } from "framer-motion";

// Translate
import useTranslation from "next-translate/useTranslation";

// Variants
import {
  containerVariants,
  elementVariants,
} from "../../animations/variants/stairs";

// Styles
import styles from "./title.module.scss";

export default function Title() {
  // Languages
  const { t } = useTranslation("header");

  const title1 = t("name");
  const title2 = "Terán";
  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.h1}
    >
      <div>
        {title1.split("").map((char, index) => {
          return (
            <motion.span
              whileHover={{ y: -30 }}
              variants={elementVariants}
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
              variants={elementVariants}
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
