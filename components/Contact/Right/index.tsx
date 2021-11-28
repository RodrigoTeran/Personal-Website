import { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";

// Languages
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./right.module.scss";

// Email
import emailJs from "emailjs-com";

// Hooks
import { useAnimationsScrollWithState } from "../../../hooks/useAnimationsScroll";

// Variants
import { variantsInitial, containerVariants } from "../../Variants/Proyect";
import { elementVariants } from "../../Variants/Contact";

// Components
import InputText from "../../Forms/InputText/index";
import BtnGradient from "../../Buttons/Gradients/Click/index";
import Loader from "../../Loader/ProcessLoader/index";

// App Context
import { AppContext } from "../../../pages/_app";

export default function RightContact() {
  // Context
  const { layoutMsgData, setIsLayoutMsg } = useContext(AppContext);

  // States
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Languages
  const { t } = useTranslation("contact");

  const submit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (isDataValidated()) {
      // EmailJs
      /**
       * name
       * email
       * subject
       * msg
       */
      emailJs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          event.target,
          process.env.USER_ID
        )
        .then(
          (_result) => {
            // Cool
            setIsLoading(false);
            layoutMsgData.current = {
              type: "success",
              title: t("right-email-success-title"),
              msg: t("right-email-success-msg"),
            };
            setIsLayoutMsg(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            // Error
            setIsLoading(false);
            console.error(error);
            layoutMsgData.current = {
              type: "warning",
              title: t("right-email-success-title"),
              msg: t("right-email-warning-1-msg"),
            };
            setIsLayoutMsg(true);
          }
        );
    } else {
      setIsLoading(false);
      layoutMsgData.current = {
        type: "warning",
        title: t("right-email-success-title"),
        msg: t("right-email-warning-2-msg"),
      };
      setIsLayoutMsg(true);
    }
  };

  const isDataValidated = (): boolean => {
    if (name != "" && email != "" && subject != "" && message != "")
      return true;
    return false;
  };

  // Refs for animation
  const sectionRef = useRef(null);

  // State for animation
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  // Animation
  useAnimationsScrollWithState(setIsAnimated, 0.5, sectionRef);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={isAnimated ? containerVariants : variantsInitial}
      className={`${styles.right}`}
      ref={sectionRef}
    >
      <Loader isInLayout={isLoading} />
      <motion.div
        variants={isAnimated ? elementVariants : variantsInitial}
        className={styles.right_card}
      >
        <motion.h3 variants={isAnimated ? elementVariants : variantsInitial}>
          {t("right-msg-title")}
        </motion.h3>
        <form onSubmit={submit}>
          <InputText
            labelText={t("right-msg-name")}
            setValue={setName}
            value={name}
            type="text"
            name="name"
            id="name-contact"
          />
          <InputText
            labelText={t("right-msg-email")}
            setValue={setEmail}
            value={email}
            type="email"
            name="email"
            id="email-contact"
          />
          <InputText
            labelText={t("right-msg-theme")}
            setValue={setSubject}
            value={subject}
            type="text"
            name="subject"
            id="subject-contact"
          />
          <span>{t("right-msg-text-title")}</span>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            name="msg"
            id="body-contact"
            value={message}
          ></textarea>
          <BtnGradient
            onClickFunction={() => {}}
            text={t("right-msg-btn")}
            isGradient
            addedClasses={styles.btn}
          />
        </form>
      </motion.div>
    </motion.section>
  );
}
