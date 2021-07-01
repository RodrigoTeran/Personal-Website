import { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";

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
              title: "Mensaje",
              msg: "Mensaje enviado con éxito!",
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
              title: "Mensaje",
              msg: "El mensaje no se pudo enviar :(",
            };
            setIsLayoutMsg(true);
          }
        );
    } else {
      setIsLoading(false);
      layoutMsgData.current = {
        type: "warning",
        title: "Mensaje",
        msg: "Llena todos los datos requeridos antes de enviar el mensaje",
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
          Envíame un mensaje 🚀
        </motion.h3>
        <form onSubmit={submit}>
          <InputText
            labelText="Nombre Completo"
            setValue={setName}
            value={name}
            type="text"
            name="name"
            id="name-contact"
          ></InputText>
          <InputText
            labelText="Correo Electrónico"
            setValue={setEmail}
            value={email}
            type="email"
            name="email"
            id="email-contact"
          ></InputText>
          <InputText
            labelText="Asunto"
            setValue={setSubject}
            value={subject}
            type="text"
            name="subject"
            id="subject-contact"
          ></InputText>
          <span>Cuéntame más del asunto</span>
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
            text="Mandar mensaje"
            isGradient
            addedClasses={styles.btn}
          ></BtnGradient>
        </form>
      </motion.div>
    </motion.section>
  );
}
