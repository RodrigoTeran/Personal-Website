import { useState } from "react";

// Styles
import styles from "./right.module.scss";

// Components
import InputText from "../../Forms/InputText/index";
import BtnGradient from "../../Buttons/Gradients/Click/index";

export default function RightContact() {
  // States
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section className={`${styles.right}`}>
      <div className={styles.right_card}>
        <h3>Envíame un mensaje 🚀</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <InputText
            labelText="Nombre Completo"
            setValue={setName}
            value={name}
            type="text"
            name="Nombre"
            id="name-contact"
          ></InputText>
          <InputText
            labelText="Correo Electrónico"
            setValue={setEmail}
            value={email}
            type="email"
            name="Email"
            id="email-contact"
          ></InputText>
          <InputText
            labelText="Asunto"
            setValue={setSubject}
            value={subject}
            type="text"
            name="Subject"
            id="subject-contact"
          ></InputText>
          <span>Cuéntame más del asunto</span>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            name="Message"
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
      </div>
    </section>
  );
}
