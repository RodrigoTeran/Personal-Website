import Image from "next/image";
import { motion } from "framer-motion";

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

// Components
import Title from "./Title/index";
import Typing from "./Typing/index";
import Responsive from "./Responsive/index";
import GradientButton from "../Buttons/Gradients/Click/index";
import GradientLink from "../Buttons/Gradients/Link/index";

export default function Header() {
  return (
    <header className={styles.header}>
      <Responsive>
        <div className={styles.header_info}>
          <Title></Title>
          <Typing></Typing>
          <motion.div
            variants={buttonsContainerVariants}
            initial="hidden"
            animate="visible"
            className={styles.header_info_buttons}
          >
            <GradientButton
              onClickFunction={() => {}}
              text="Contáctame"
              addedClasses={styles.header_info_buttons_gradient}
              isGradient
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.05 }}
            ></GradientButton>
            <GradientLink
              addedClasses={styles.header_info_buttons_blank}
              link="/Profile.pdf"
              text="Portafolio"
              target="_blank"
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.05 }}
            ></GradientLink>
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
