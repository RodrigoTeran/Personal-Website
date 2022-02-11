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
  return (
    <nav className={styles.nav}>
      <div>
        <Btn
          callback={() => {
            setChoosenProject(0);
          }}
          text="Machine learning"
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
          text="Data science"
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
          text="Web development"
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
          text="Algorithms"
          withBorder
          type="black"
          size="small"
          isClicked={choosenProject == 3}
        />
      </div>
    </nav>
  );
}
