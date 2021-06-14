import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

// Styles
import stylesResponsive from "./navResponsive.module.scss";

// Variants
import { elementVariants } from "./Variants";

type PropsResponsive = {
  responsiveNav: boolean;
  setResponsiveNav: Dispatch<SetStateAction<boolean>>;
  children: any;
};

// Responsive Nav
export default function Responsive({
  responsiveNav,
  setResponsiveNav,
  children,
}: PropsResponsive) {
  return (
    <>
      <motion.div
        onClick={() => {
          setResponsiveNav(true);
        }}
        className={stylesResponsive.nav__responsive}
        variants={elementVariants}
      >
        <div className={stylesResponsive.nav__responsive__line}></div>
        <div className={stylesResponsive.nav__responsive__line}></div>
        <div className={stylesResponsive.nav__responsive__line}></div>
      </motion.div>
      <div
        className={`${stylesResponsive.nav__responsive__container} ${
          responsiveNav ? stylesResponsive.open : ""
        }`}
      >
        <div
          className={stylesResponsive.nav__responsive__container__back}
          onClick={() => {
            setResponsiveNav(false);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </div>
        {children}
      </div>
    </>
  );
}
