// Translation
import useTranslation from "next-translate/useTranslation";

// Modules
import styles from "./card.module.scss";
import { useState } from "react";

// Email
import emailJs from "emailjs-com";

// Componnets
import InputText from "../../Input/Text/index";
import Button from "../../Buttons/index";
import Loader from "../../Loader/index";

const Card = () => {
  // Language
  const { t } = useTranslation("contact");

  const [nameClient, setNameClient] = useState<string>("");
  const [emailClient, setEmailClient] = useState<string>("");
  const [subjectClient, setSubjectClient] = useState<string>("");
  const [msgClient, setMsgClient] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isDataValidated = (): boolean => {
    return (
      nameClient.trim() != "" &&
      emailClient.trim() != "" &&
      subjectClient.trim() != "" &&
      msgClient.trim() != ""
    );
  };

  const submit = (event: any) => {
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
          (_result: any) => {
            // Cool
            setIsLoading(false);
            // TODO: SUCESS MSG
            setNameClient("");
            setEmailClient("");
            setSubjectClient("");
            setMsgClient("");
          },
          (error: any) => {
            // Error
            setIsLoading(false);
            console.error(error);
            // TODO: DANGER MSG
          }
        );
    } else {
      setIsLoading(false);
      // TODO: DANGER MSG
    }
  };

  return (
    <div className={styles.card}>
      {isLoading && (
        <div className={styles.card_loader}>
          <Loader />
        </div>
      )}
      <div className={styles.card_title}>{t("card-1")}&nbsp;🚀</div>
      <form onSubmit={submit}>
        <InputText
          text={t("card-2")}
          value={nameClient}
          setValue={setNameClient}
          id="name-client"
          name="name"
          type="text"
        />
        <InputText
          text={t("card-3")}
          value={emailClient}
          setValue={setEmailClient}
          id="email-client"
          name="email"
          type="email"
        />
        <InputText
          text={t("card-4")}
          value={subjectClient}
          setValue={setSubjectClient}
          id="subject-client"
          name="subject"
          type="text"
        />
        <InputText
          text={t("card-5")}
          value={msgClient}
          setValue={setMsgClient}
          id="msg-client"
          name="msg"
          type="text"
          isTextarea
        />
        <Button
          callback={() => {}}
          text={t("card-6")}
          type="gradient"
          size="small"
          withBorder={false}
          className={styles.btn}
        />
      </form>
    </div>
  );
};

export default Card;
