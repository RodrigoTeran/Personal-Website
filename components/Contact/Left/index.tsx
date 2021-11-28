import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Hooks
import { useAnimationsScrollWithState } from "../../../hooks/useAnimationsScroll";

// Languages
import useTranslation from "next-translate/useTranslation";

// Images
import profilePic from "../../../public/images/me.jpg";

// Variants
import { variantsInitial, containerVariants } from "../../Variants/Proyect";
import { elementVariants } from "../../Variants/Contact";

// Styles
import styles from "./left.module.scss";

export default function LeftContact() {
  // Refs for animation
  const sectionRef = useRef(null);

  // State for animation
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  // Animation
  useAnimationsScrollWithState(setIsAnimated, 0.5, sectionRef);

  // Languages
  const { t } = useTranslation("contact");

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={isAnimated ? containerVariants : variantsInitial}
      className={`${styles.left}`}
      ref={sectionRef}
    >
      <motion.h3 variants={isAnimated ? elementVariants : variantsInitial}>
        {t("left-hi-1")}
        <br />
        {t("left-hi-2")}
      </motion.h3>
      <motion.p variants={isAnimated ? elementVariants : variantsInitial}>
        {t("left-create")}
      </motion.p>
      <motion.div
        variants={isAnimated ? elementVariants : variantsInitial}
        className={styles.card}
      >
        <div className={styles.card_img}>
          <Image
            src={profilePic}
            alt="Rodrigo Terán"
            width={50}
            height={50}
            priority
            className={styles.img}
          />
        </div>
        <div className={styles.card_info}>
          {t("left-remember-1")}
          <br />
          <span>{t("left-remember-2")}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
