// Translation
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./menu.module.scss";

// Btns
import Btn from "../../Buttons/index";
import { Dispatch, SetStateAction, useRef, CSSProperties } from "react";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

const DELAY: number = 10;

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
  setChoosenProject: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
};

export default function Menu({ choosenProject, setChoosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/overview");

  // Ref
  const refBtn_1 = useRef<any>(null);
  const refBtn_2 = useRef<any>(null);
  const refBtn_3 = useRef<any>(null);
  const refBtn_4 = useRef<any>(null);

  // Hook animation
  useAnimationsScroll({
    componentsList: [
      {
        element: refBtn_1,
        screenPercentage: 0.5,
        notAppearClass: styles.not
      },
      {
        element: refBtn_2,
        screenPercentage: 0.5,
        notAppearClass: styles.not
      },
      {
        element: refBtn_3,
        screenPercentage: 0.5,
        notAppearClass: styles.not
      },
      {
        element: refBtn_4,
        screenPercentage: 0.5,
        notAppearClass: styles.not
      }
    ]
  });

  return (
    <nav className={styles.nav}>
      <div
        className={styles.nav_div}
        style={{ "--delay": 0 } as CSSProperties}
        ref={refBtn_1}
      >
        <Btn
          callback={() => {
            setChoosenProject(0);
          }}
          text={t("header-1")}
          withBorder
          type="black"
          size="small"
          isClicked={choosenProject == 0}
        />
      </div>
      <div
        className={styles.nav_div}
        style={{ "--delay": DELAY } as CSSProperties}
        ref={refBtn_2}
      >
        <Btn
          callback={() => {
            setChoosenProject(1);
          }}
          text={t("header-2")}
          withBorder
          type="black"
          size="small"
          isClicked={choosenProject == 1}
        />
      </div>
      <div
        className={styles.nav_div}
        style={{ "--delay": 2 * DELAY } as CSSProperties}
        ref={refBtn_3}
      >
        <Btn
          callback={() => {
            setChoosenProject(2);
          }}
          text={t("header-3")}
          withBorder
          type="black"
          size="small"
          isClicked={choosenProject == 2}
        />
      </div>
      <div
        className={styles.nav_div}
        style={{ "--delay": 3 * DELAY } as CSSProperties}
        ref={refBtn_4}
      >
        <Btn
          callback={() => {
            setChoosenProject(3);
          }}
          text={t("header-4")}
          withBorder
          type="black"
          size="small"
          isClicked={choosenProject == 3}
        />
      </div>
    </nav>
  );
}
