import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./msgs.module.scss";

// Variants
import { layoutMsgs } from "../Variants/LayoutMsgs";

type Props = {
  title: string;
  type: "info" | "warning" | "success";
  msg: string;
  toggle: Dispatch<SetStateAction<boolean>>;
};

export default function Msgs({ title, type, msg, toggle }: Props) {
  return (
    <motion.div
      variants={layoutMsgs}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${styles.msgs} ${styles[`msgs_${type}`]}`}
    >
      <div className={styles.msgs_svg_container}>
        {type == "info" && (
          <svg
            className={styles.msgs_svg_info}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
          </svg>
        )}
        {type == "warning" && (
          <svg
            className={styles.msgs_svg_warning}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
          </svg>
        )}
        {type == "success" && (
          <svg
            className={styles.msgs_svg_success}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
          </svg>
        )}
      </div>
      <div className={`${styles.msgs_body} ${styles[`msgs_body_${type}`]}`}>
        <h5>{title}</h5>
        <p>{msg}</p>
      </div>
      <div className={`${styles.msgs_btn} ${styles[`msgs_btn_${type}`]}`}>
        <button
          onClick={() => {
            toggle(false);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
