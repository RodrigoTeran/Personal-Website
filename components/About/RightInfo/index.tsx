import Image from "next/image";

// Images
import profilePic from "../../../public/images/itesm_logo.png";

// Styles
import styles from "./right.module.scss";

export default function RightInfo() {
  return (
    <section className={styles.right}>
      <em className={`${styles.em_left} ${styles.em}`}>Intereses</em>
      <br />
      <p>
        Soy un apasionado de la tecnología, en especial la{" "}
        <b>Inteligencia Artificial.</b> Me encanta resolver problemas con el uso
        de la tecnología. Toda mi vida me ha llamado la atención la ingeniería.
      </p>
      <em className={`${styles.em_right} ${styles.em}`}>Estudios</em>
      <br />
      <p>
        Recientemente terminé mis estudios de preparatoria de la{" "}
        <a href="https://tec.mx/en/queretaro-campus" target="blank">
          Prepa Tec Querétaro.
        </a>
        &nbsp;En <time dateTime="2021-08-08">agosto del 2021</time> empezaré mi
        carrera de Ingeniería de Software en la misma Universidad.
      </p>
      <div className={styles.img_container}>
        <Image
          src={profilePic}
          alt="Tecnológico de Monterrey"
          width={250}
          height={100}
          className={styles.img}
        />
      </div>
      <em className={`${styles.em_left} ${styles.em}`}>Hobbies</em>
      <br />
      <p>Aparte de programar, me gusta...</p>
      <ul>
        <li>
          hacer{" "}
          <a
            href="https://www.google.com/search?q=que+es+la+calistenia&bih=656&biw=1396&hl=en&sxsrf=ALeKk02gFmzKhHZv907SuzDSOpw9Kqrbew%3A1624589983234&ei=n0bVYPLeDZu4qtsPoI27yA0&oq=que+es+la+calistenia&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEAcQHjIGCAAQBxAeMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywE6BwgjELADECc6BwgAEEcQsAM6DQguEMcBEKMCELADEEM6BAgAEA1KBAhBGABQ6SRYxyxgozBoAXACeACAAZMBiAHICJIBAzcuNJgBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwiyquym5bHxAhUbnGoFHaDGDtkQ4dUDCA4&uact=5"
            target="blank"
          >
            Calistenia
          </a>
        </li>
        <li>cocinar postres</li>
        <li>leer</li>
      </ul>
    </section>
  );
}
