import Image from "next/image";

// Images
import profilePic from "../../public/images/me.jpg";

// Styles
import styles from "./header.module.scss";

// Components
import Title from "./Title/index";
import Typing from "./Typing/index";
import Responsive from "./Responsive/index";

export default function Header() {
  return (
    <header className={styles.header}>
      <Responsive>
        <div className={styles.header_info}>
          <Title></Title>
          <Typing></Typing>
        </div>
        <div className={styles.header_img}>
          <Image
            src={profilePic}
            alt="Rodrigo Terán"
            width={250}
            height={250}
            priority
            className={styles.img}
          />
        </div>
      </Responsive>
    </header>
  );
}
