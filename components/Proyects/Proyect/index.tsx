import Image from "next/image";

// Styles
import styles from "./proyect.module.scss";

type Props = {
  imageSrc: any;
  title: string;
  children: any;
  techStack: Array<string>;
  link: string;
  alt: string;
};

export default function Proyect({
  imageSrc,
  title,
  children,
  techStack,
  link,
  alt,
}: Props) {
  return (
    <div className={styles.proyect}>
      <div className={styles.proyect_img_container}>
        <Image
          src={imageSrc}
          alt={alt}
          priority
          width={1218}
          height={790}
          className={styles.proyect_img}
        />
      </div>
      <div className={styles.proyect_info}>
        <h3>{title}</h3>
        <p>{children}</p>
        <div className={styles.proyect_info_techs}>
          {techStack.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
        </div>
        <a href={link} target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
