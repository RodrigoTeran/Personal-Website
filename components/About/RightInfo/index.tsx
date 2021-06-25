import Image from "next/image";
import { useRef } from "react";

// Images
import profilePic from "../../../public/images/itesm_logo.png";

// Styles
import styles from "./right.module.scss";

// Animations Scroll
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

export default function RightInfo() {
  // Refs for animations
  const emInterests = useRef(null);
  const emStudy = useRef(null);
  const emHobbies = useRef(null);

  const pInterests = useRef(null);
  const pStudy = useRef(null);
  const imgStudy = useRef(null);
  const pHobbies = useRef(null);
  const ulHobbies = useRef(null);

  useAnimationsScroll(
    [emInterests, emStudy, emHobbies],
    0.6,
    "notAppear_leftToRight"
  );

  useAnimationsScroll(
    [pInterests, pStudy, imgStudy, pHobbies, ulHobbies],
    0.6,
    "notAppear_topToBottom"
  );

  return (
    <section className={styles.right}>
      <em ref={emInterests} className={`${styles.em_left} ${styles.em}`}>
        Intereses
      </em>
      <br />
      <p ref={pInterests}>
        Soy un apasionado de la tecnología, en especial la{" "}
        <b>Inteligencia Artificial.</b> Me encanta resolver problemas con el uso
        de la tecnología. Toda mi vida me ha llamado la atención la ingeniería.
      </p>
      <em ref={emStudy} className={`${styles.em_right} ${styles.em}`}>
        Estudios
      </em>
      <br />
      <p ref={pStudy}>
        Recientemente terminé mis estudios de preparatoria de la{" "}
        <a href="https://tec.mx/en/queretaro-campus" target="blank">
          Prepa Tec Querétaro.
        </a>
        &nbsp;En <time dateTime="2021-08-08">agosto del 2021</time> empezaré mi
        carrera de Ingeniería de Software en la misma Universidad.
      </p>
      <div ref={imgStudy} className={styles.img_container}>
        <Image
          src={profilePic}
          alt="Tecnológico de Monterrey"
          width={250}
          height={100}
          priority
          className={styles.img}
        />
      </div>
      <em ref={emHobbies} className={`${styles.em_left} ${styles.em}`}>
        Hobbies
      </em>
      <br />
      <p ref={pHobbies}>Aparte de programar, me gusta...</p>
      <ul ref={ulHobbies}>
        <li>
          hacer{" "}
          <a
            href="https://www.google.com/search?q=que+es+la+calistenia&oq=que+es+la+calistenia&aqs=chrome..69i57.222j0j1&sourceid=chrome&ie=UTF-8"
            target="blank"
          >
            Calistenia
          </a>
        </li>
        <li>cocinar postres</li>
        <li>y leer</li>
      </ul>
    </section>
  );
}
