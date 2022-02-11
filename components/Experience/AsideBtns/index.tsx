// Modules
import { useRef } from "react";

// Styles
import styles from "./aside.module.scss";

// Types
import { Dispatch, SetStateAction } from "react";

// Animations hook
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Btns from "../ButtonAside/index";

type Props = {
  projectIndex: 0 | 1 | 2 | 3 | 4;
  setProjectIndex: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4>>;
};

export default function AsideBtns({ projectIndex, setProjectIndex }: Props) {
  // Translation
  const { t } = useTranslation("experience");

  // Animations scroll
  // Ref of component
  const refAside = useRef<any>(null);

  useAnimationsScroll({
    componentsList: [
      {
        element: refAside,
        screenPercentage: 0.445,
        notAppearClass: styles.not,
      },
    ]
  });

  return (
    <div className={`${styles.btns} ${styles.not}`} ref={refAside}>
      <div>
        <span>{t("span-1")}</span>
        <Btns
          isSelected={projectIndex == 0}
          _callback={() => {
            if (projectIndex != 0) setProjectIndex(0);
          }}
          text={t("work-1-title")}
        />
        <Btns
          isSelected={projectIndex == 1}
          _callback={() => {
            if (projectIndex != 1) setProjectIndex(1);
          }}
          text={t("work-2-title")}
        />
        <Btns
          isSelected={projectIndex == 2}
          _callback={() => {
            if (projectIndex != 2) setProjectIndex(2);
          }}
          text={t("work-3-title")}
        />
        <Btns
          isSelected={projectIndex == 3}
          _callback={() => {
            if (projectIndex != 3) setProjectIndex(3);
          }}
          text={t("work-4-title")}
        />
      </div>
      <div>
        <span>{t("span-2")}</span>
        <Btns
          isSelected={projectIndex == 4}
          _callback={() => {
            if (projectIndex != 4) setProjectIndex(4);
          }}
          text={t("work-5-title")}
        />
      </div>
    </div>
  );
}
