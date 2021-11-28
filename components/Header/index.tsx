import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Languages
import useTranslation from "next-translate/useTranslation";

// App Context
import { AppContext } from "../../pages/_app";

// Variants
import {
  buttonsContainerVariants,
  imageVariants,
  buttonVariants,
} from "../Variants/Header";

// Images
import profilePic from "../../public/images/me.jpg";

// Styles
import styles from "./header.module.scss";

// Functions
import { goto } from "../../functions/goTo";

// Components
import Title from "./Title/index";
import Typing from "./Typing/index";
import Responsive from "./Responsive/index";
import GradientButton from "../Buttons/Gradients/Click/index";
import GradientLink from "../Buttons/Gradients/Link/index";

export default function Header() {
  const { contactRef } = useContext(AppContext);

  // Languages
	const { t } = useTranslation("header");

  return (
    <header className={styles.header}>
      <Responsive>
        <div className={styles.header_info}>
          <Title />
          <Typing />
          <motion.div
            variants={buttonsContainerVariants}
            initial="hidden"
            animate="visible"
            className={styles.header_info_buttons}
          >
            <GradientButton
              onClickFunction={() => {
                goto(contactRef);
              }}
              text={t("btn-1")}
              addedClasses={styles.header_info_buttons_gradient}
              isGradient
              variants={buttonVariants}
            />
            <GradientLink
              addedClasses={styles.header_info_buttons_blank}
              link="/Profile.pdf"
              text={t("btn-2")}
              target="_blank"
              variants={buttonVariants}
            />
          </motion.div>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className={styles.header_img}
        >
          <Image
            src={profilePic}
            alt="Rodrigo Terán"
            width={250}
            height={250}
            priority
            className={styles.img}
          />
        </motion.div>
      </Responsive>
    </header>
  );
}
