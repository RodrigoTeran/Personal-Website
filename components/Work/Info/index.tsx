import { Dispatch, SetStateAction, useRef } from "react";

// Images
import BimasImage from "../../../public/images/bimas.jpg";
import LeadsalesImage from "../../../public/images/leadsales.png";
import UniformsImage from "../../../public/images/uniformes.png";

// Styles
import styles from "./info.module.scss";
import stylesAbout from "../../About/RightInfo/right.module.scss";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Componentes
import Card from "./Cards/index";

type Props = {
  indexCardSelected: number;
  setIndexCardSelected: Dispatch<SetStateAction<number>>;
  indexes: number;
  setIndexes: Dispatch<SetStateAction<number>>;
  changeProyect: (
    imgSrc_: any,
    title_: string,
    techStack_: Array<string>,
    link_: string,
    alt_: string,
    childrenIndex_: number
  ) => any;
};

export default function Info({
  indexCardSelected,
  setIndexCardSelected,
  indexes,
  setIndexes,
  changeProyect,
}: Props) {
  var quantityOfCards = 3;

  // Refs for animations
  const h3Ref = useRef(null);
  const emRef = useRef(null);
  const cardsRef = useRef(null);

  // Animations
  useAnimationsScroll([h3Ref, emRef, cardsRef], 0.6, "notAppear_topToBottom");

  return (
    <section className={styles.info}>
      <h3 ref={h3Ref}>
        Desarrollador de plataformas web, especializado en funcionalidades,
        diseño y animaciones.
      </h3>

      <em
        ref={emRef}
        className={`${stylesAbout.em} ${stylesAbout.em_left} ${styles.em}`}
      >
        Trabajos que he tenido
      </em>
      <br />

      <div className={styles.info_cards} ref={cardsRef}>
        <button
          onClick={() => {
            if (indexes < 0) {
              setIndexes(indexes + 1);
            }
          }}
          className={`${styles.info_cards_btn} ${
            indexes < 0 ? "" : styles.info_cards_btn_no
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
          </svg>
        </button>
        <div className={styles.info_cards_container}>
          <div className={styles.info_cards_container_movable}>
            <Card
              text="Leadsales (actual)"
              callback={() => {
                setIndexCardSelected(0);
                changeProyect(
                  LeadsalesImage,
                  "Leadsales",
                  ["Desde Mayo 2021", "-", "hasta la actualidad"],
                  "https://leadsales.io/en/",
                  "Leadsales",
                  0
                );
              }}
              isSelected={indexCardSelected == 0 ? true : false}
              index={indexes}
            ></Card>
            <Card
              text="BIMAS SC"
              callback={() => {
                setIndexCardSelected(1);
                changeProyect(
                  BimasImage,
                  "BIMAS SC",
                  ["Septiembre 2020"],
                  "https://bimas.com.mx/",
                  "Bimas SC",
                  1
                );
              }}
              isSelected={indexCardSelected == 1 ? true : false}
              index={indexes + 1}
            ></Card>
            <Card
              text="Uniformate bien"
              callback={() => {
                setIndexCardSelected(2);
                changeProyect(
                  UniformsImage,
                  "Uniformate bien",
                  ["Junio 2021"],
                  "https://uniformate-bien.vercel.app/",
                  "Uniformes",
                  2
                );
              }}
              isSelected={indexCardSelected == 2 ? true : false}
              index={indexes + 2}
            ></Card>
          </div>
        </div>
        <button
          onClick={() => {
            if (indexes > -(quantityOfCards - 1)) {
              setIndexes(indexes - 1);
            }
          }}
          className={`${styles.info_cards_btn} ${
            indexes > -(quantityOfCards - 1) ? "" : styles.info_cards_btn_no
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
