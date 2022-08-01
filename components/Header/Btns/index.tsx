// Modules
import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app";

// Styles
import styles from "./btn.module.scss";

// Btn
import Btn from "../../Buttons/index";

// Translate
import useTranslation from "next-translate/useTranslation";

// Variants
const buttonsContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const buttonVariants = {
  hidden: {
    y: 150,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 200,
      type: "spring",
      mass: 0.4,
      damping: 12
    }
  }
};
export default function ButtonsHeader() {
  const { goTo } = useContext(GlobalContext);

  // Translation
  const { t } = useTranslation("header");

  return (
    <motion.div
      variants={buttonsContainerVariants}
      animate="visible"
      initial="hidden"
      className={styles.btn}
    >
      <motion.div variants={buttonVariants}>
        <Btn
          callback={() => {
            if (goTo) goTo("contact-me");
          }}
          text={t("btn-1")}
          withBorder
          type="gradient"
          size="medium"
          className={styles.btn_each}
        />
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Btn
          callback={() => {
            window.open("/resume.pdf", "_blank");
          }}
          text={t("btn-2")}
          withBorder
          type="white"
          size="medium"
          className={styles.btn_each}
        />
      </motion.div>
    </motion.div>
  );
}
