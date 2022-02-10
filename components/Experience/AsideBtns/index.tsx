// Styles
import styles from "./aside.module.scss";

// Modules
import { Dispatch, SetStateAction } from "react";

// Components
import Btns from "../ButtonAside/index";

type Props = {
  projectIndex: 0 | 1 | 2 | 3 | 4;
  setProjectIndex: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4>>;
};

export default function AsideBtns({ projectIndex, setProjectIndex }: Props) {
  return (
    <div className={styles.btns}>
      <div>
        <span>4 years of work experience...</span>
        <Btns
          isSelected={projectIndex == 0}
          _callback={() => {
            if (projectIndex != 0) setProjectIndex(0);
          }}
          text="Drive Clone"
        />
        <Btns
          isSelected={projectIndex == 1}
          _callback={() => {
            if (projectIndex != 1) setProjectIndex(1);
          }}
          text="E-commerce platform"
        />
        <Btns
          isSelected={projectIndex == 2}
          _callback={() => {
            if (projectIndex != 2) setProjectIndex(2);
          }}
          text="Sales tracking software"
        />
        <Btns
          isSelected={projectIndex == 3}
          _callback={() => {
            if (projectIndex != 3) setProjectIndex(3);
          }}
          text="Leadsales internship"
        />
      </div>
      <div>
        <span>Summer 2022, coming soon...</span>
        <Btns
          isSelected={projectIndex == 4}
          _callback={() => {
            if (projectIndex != 4) setProjectIndex(4);
          }}
          text="Facebook internship"
        />
      </div>
    </div>
  );
}
