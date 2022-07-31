// Translation
import useTranslation from "next-translate/useTranslation";

// Styles
import styles from "./menu.module.scss";

// Btns
import Btn from "../../Buttons/index";
import { Dispatch, SetStateAction } from "react";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
  setChoosenProject: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
};

export default function Menu({ choosenProject, setChoosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/overview");

  return (
    <nav className={styles.nav}>
      <div>
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
      <div>
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
      <div>
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
      <div>
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
