import Image from "next/image";

// Images
import profilePic from "../../../public/images/me.jpg";

// Styles
import styles from "./left.module.scss";

export default function LeftContact() {
  return (
    <section className={`${styles.left}`}>
      <h3>
        Hola,
        <br />
        cuéntame sobre tu proyecto
      </h3>
      <p>Vamos a crear algo juntos 🤟</p>
      <div className={styles.card}>
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
          Recuerda que también puedes contactarme
          <br />
          <span>en mis redes sociales</span>
        </div>
      </div>
    </section>
  );
}
