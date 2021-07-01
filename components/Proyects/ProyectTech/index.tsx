import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import { motion } from "framer-motion";

// Hooks
import { useAnimationsScrollWithState } from "../../../hooks/useAnimationsScroll";

// Variants
import {
  containerVariants,
  elementVariants,
  variantsInitial,
} from "../../Variants/Proyect";

// Styles
import styles from "./proyectTech.module.scss";

type PropsLeft = {
  title: string;
  imgSrc: any;
  linkProyect: string;
  linkSource?: string;
  host: any;
  techStack: Array<string>;
  animation: boolean;
};

function Left({
  title,
  imgSrc,
  linkProyect,
  linkSource,
  host,
  techStack,
  animation,
}: PropsLeft) {
  return (
    <div className={styles.tech_left}>
      <motion.h3 variants={animation ? elementVariants : variantsInitial}>
        {title}
      </motion.h3>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_left_img_container}
      >
        <Image
          src={imgSrc}
          alt={title}
          width={385.44}
          height={250}
          priority
          className={styles.tech_left_img}
        />
        {/* Resolution: 1218 × 790  */}
      </motion.div>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_left_links}
      >
        <a href={linkProyect} target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
          </svg>
          Link al Proyecto
        </a>
        {linkSource && (
          <a href={linkSource} target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" />
            </svg>
            Link al Repositorio
          </a>
        )}
        {!linkSource && (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" />
            </svg>
            Repositorio Privado
          </span>
        )}
      </motion.div>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_left_host}
      >
        {host}
      </motion.div>
      <motion.h4 variants={animation ? elementVariants : variantsInitial}>
        Tecnologías usadas
      </motion.h4>
      <div className={styles.tech_left_stack_container}>
        <ul className={styles.tech_left_stack}>
          {techStack
            .filter((_e, index) => index < techStack.length / 2)
            .map((tech, index) => (
              <Fragment key={index}>
                <motion.li
                  key={index}
                  variants={animation ? elementVariants : variantsInitial}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" />
                  </svg>
                  {tech}
                </motion.li>
              </Fragment>
            ))}
        </ul>
        <ul className={styles.tech_left_stack}>
          {techStack
            .filter((_e, index) => index >= techStack.length / 2)
            .map((tech, index) => (
              <Fragment key={index}>
                <motion.li
                  variants={animation ? elementVariants : variantsInitial}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" />
                  </svg>
                  {tech}
                </motion.li>
              </Fragment>
            ))}
        </ul>
      </div>
    </div>
  );
}

type PropsRight = {
  description: any;
  difficulties: any;
  solution: any;
  notableFeatures: Array<string>;
  animation: boolean;
};

function Right({
  description,
  difficulties,
  solution,
  notableFeatures,
  animation,
}: PropsRight) {
  return (
    <div className={styles.tech_right}>
      <motion.h4
        variants={animation ? elementVariants : variantsInitial}
        style={{
          marginTop: "0px",
        }}
      >
        Descripción
      </motion.h4>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_right_des}
      >
        {description}
      </motion.div>
      <motion.h4 variants={animation ? elementVariants : variantsInitial}>
        Dificultades del Proyecto
      </motion.h4>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_right_problems}
      >
        {difficulties}
      </motion.div>
      <motion.h4 variants={animation ? elementVariants : variantsInitial}>
        Mi Solución
      </motion.h4>
      <motion.div
        variants={animation ? elementVariants : variantsInitial}
        className={styles.tech_right_solution}
      >
        {solution}
      </motion.div>
      <motion.h4 variants={animation ? elementVariants : variantsInitial}>
        Características Notables
      </motion.h4>
      <ul>
        {notableFeatures.map((feature, index) => (
          <motion.li
            variants={animation ? elementVariants : variantsInitial}
            key={index}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

type PropsTech = {
  title: string;
  imgSrc: any;
  linkProyect: string;
  linkSource?: string;
  host: any;
  techStack: Array<string>;
  description: any;
  difficulties: any;
  solution: any;
  notableFeatures: Array<string>;
};

export default function ProyectTech({
  title,
  imgSrc,
  linkProyect,
  linkSource,
  host,
  techStack,
  description,
  difficulties,
  solution,
  notableFeatures,
}: PropsTech) {
  const [animation, setAnimation] = useState<boolean>(false);
  const sectionRef = useRef(null);

  useAnimationsScrollWithState(setAnimation, 0.5, sectionRef);

  return (
    <motion.section
      variants={animation ? containerVariants : variantsInitial}
      initial="hidden"
      animate="visible"
      className={styles.tech}
      ref={sectionRef}
    >
      <Left
        title={title}
        imgSrc={imgSrc}
        linkProyect={linkProyect}
        linkSource={linkSource}
        host={host}
        techStack={techStack}
        animation={animation}
      ></Left>
      <Right
        description={description}
        difficulties={difficulties}
        solution={solution}
        notableFeatures={notableFeatures}
        animation={animation}
      ></Right>
    </motion.section>
  );
}
