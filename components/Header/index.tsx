import Image from "next/image";
import { motion } from "framer-motion";

// Variants
import { buttonsContainerVariants, imageVariants } from "../Variants/Header";

// Images
import profilePic from "../../public/images/me.jpg";

// Styles
import styles from "./header.module.scss";

// Components
import Title from "./Title/index";
import Typing from "./Typing/index";
import Responsive from "./Responsive/index";
import Button from "../Buttons/Gradients/Click/index";
import Link from "../Buttons/Gradients/Link/index";

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
            <Button
              onClickFunction={() => {}}
              text="Contáctame"
              addedClasses={styles.header_info_buttons_gradient}
              isGradient
            ></Button>
            <Link
              addedClasses={styles.header_info_buttons_blank}
              link=""
              text="Portafolio"
              target="_blank"
            ></Link>
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
