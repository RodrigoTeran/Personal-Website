// Modules
import React, { useRef } from "react";

// Styles
import styles from "./aside.module.scss";

// Types
import { Dispatch, SetStateAction } from "react";
import { INDEXES, arrIndexes } from "../experience.types";

// Animations hook
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Btns from "../ButtonAside/index";

type Props = {
  projectIndex: INDEXES;
  setProjectIndex: Dispatch<SetStateAction<INDEXES>>;
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
        notAppearClass: styles.not
      }
    ]
  });

  return (
    <div className={`${styles.btns} ${styles.not}`} ref={refAside}>
      <div>
        <span>{t("span-1")}</span>
        {[...arrIndexes].reverse().map((position: any) => {
          return (
            <React.Fragment key={position}>
              <Btns
                isSelected={projectIndex == position}
                _callback={() => {
                  if (projectIndex != position) setProjectIndex(position);
                }}
                text={t(`work-${position + 1}-title`)}
              />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
}
