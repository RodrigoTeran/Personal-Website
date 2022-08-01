import styles from "./card.module.scss";
import { useState } from "react";

// Componnets
import InputText from "../../Input/Text/index";
import Button from "../../Buttons/index";

const Card = () => {
  const [nameClient, setNameClient] = useState<string>("");
  const [emailClient, setEmailClient] = useState<string>("");
  const [subjectClient, setSubjectClient] = useState<string>("");
  const [msgClient, setMsgClient] = useState<string>("");

  return (
    <div className={styles.card}>
      <div className={styles.card_title}>Send me a message 🚀</div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <InputText
          text="Full name"
          value={nameClient}
          setValue={setNameClient}
          id="name-client"
          name="Name"
          type="text"
        />
        <InputText
          text="Email"
          value={emailClient}
          setValue={setEmailClient}
          id="email-client"
          name="Email"
          type="email"
        />
        <InputText
          text="Subject"
          value={subjectClient}
          setValue={setSubjectClient}
          id="subject-client"
          name="Subject"
          type="text"
        />
        <InputText
          text="Tell me more about it"
          value={msgClient}
          setValue={setMsgClient}
          id="msg-client"
          name="Message"
          type="text"
          isTextarea
        />
        <Button
          callback={() => {}}
          text="Send message"
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
