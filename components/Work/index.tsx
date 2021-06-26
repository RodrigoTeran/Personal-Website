import { useContext, useState, useRef } from "react";

// Images
import LeadsalesImage from "../../public/images/leadsales.png";

// Functions
import { goto } from "../../functions/goTo";

// Styles
import styles from "./work.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import Years from "./Years/index";
import Info from "./Info/index";
import Proyect from "../Proyects/Proyect/index";

export default function Work() {
  const { experienceRef } = useContext(AppContext);

  // Info state
  const [indexCardSelected, setIndexCardSelected] = useState(0);
  const [indexes, setIndexes] = useState(0);

  // Proyect state
  const [imgSrc, setImgSrc] = useState<any>(LeadsalesImage);
  const [title, setTitle] = useState<string>("Leadsales");
  const [techStack, setTechStack] = useState<Array<string>>([
    "Desde Mayo 2021",
    "-",
    "hasta la actualidad",
  ]);
  const [link, setLink] = useState<string>("https://leadsales.io/en/");
  const [alt, setAlt] = useState<string>("Leadsales");
  const [childrenIndex, setChildrenIndex] = useState<number>(0);

  // Proyect Ref
  const proyectRef = useRef(null);

  const changeProyect = (
    imgSrc_: any,
    title_: string,
    techStack_: Array<string>,
    link_: string,
    alt_: string,
    childrenIndex_: number
  ) => {
    setImgSrc(imgSrc_);
    setTitle(title_);
    setTechStack(techStack_);
    setLink(link_);
    setAlt(alt_);
    setChildrenIndex(childrenIndex_);

    goto(proyectRef);
  };

  return (
    <article className={`${styles.work} sections`} ref={experienceRef}>
      <h2 className={`${styles.work_h2}`}>Experiencia</h2>
      <div className={styles.sections}>
        <Years
          years={3}
          text_1="Más de tres"
          text_2="años"
          text_3="creando"
        ></Years>
        <Info
          indexCardSelected={indexCardSelected}
          setIndexCardSelected={setIndexCardSelected}
          indexes={indexes}
          setIndexes={setIndexes}
          changeProyect={changeProyect}
        ></Info>
      </div>
      <div className={styles.sections} ref={proyectRef}>
        <Proyect
          imageSrc={imgSrc}
          title={title}
          techStack={techStack}
          link={link}
          alt={alt}
        >
          {childrenIndex == 0 ? (
            <>
              Trabajo como <b>intern</b> en Leadsales en el área de desarrollo
              web frontend.
            </>
          ) : childrenIndex == 1 ? (
            <>
              Desarrollé la <b>página web de BIMAS SC</b>, una empresa con la
              finalidad de ofrecer servicios en temas ambientales.
            </>
          ) : null}
        </Proyect>
      </div>
    </article>
  );
}
