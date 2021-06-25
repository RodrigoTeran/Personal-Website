// Components
import Quotes from "../Quotes/index";

// Styles
import styles from "./left.module.scss";

export default function LeftInfo() {
  return (
    <section className={styles.left}>
      <p>Hola, me llamo Rodrigo Terán. Vivo en Querétaro, México.</p>
      <Quotes
        text="Si puedes imaginarlo, puedes programarlo"
        person="Alejandro Taboada"
      ></Quotes>
    </section>
  );
}
