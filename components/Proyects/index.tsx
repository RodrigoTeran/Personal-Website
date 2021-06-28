import { useContext } from "react";

// Styles
import styles from "./proyects.module.scss";
import stylesAbout from "../About/about.module.scss";

// App Context
import { AppContext } from "../../pages/_app";

// Components
import ProyectTech from "./ProyectTech/index";

// Images
import dogFinderImg from "../../public/images/dogFinder.jpg";
import darkImg from "../../public/images/dark-programming.png";
import fourierImg from "../../public/images/fourier.png";

export default function Proyects() {
  const { workRef } = useContext(AppContext);
  return (
    <article className={`${styles.proyects} sections`} ref={workRef}>
      <h2 className={`${stylesAbout.about_h2} ${styles.proyects_h2}`}>
        Proyectos Personales
      </h2>
      <ProyectTech
        title="Dog Finder"
        imgSrc={dogFinderImg}
        linkProyect="https://dogfinder.com.mx/"
        host={
          <p>
            Esta aplicación está siendo mantenida en un plan&nbsp;
            <a href="https://www.heroku.com/" target="blank">
              gratuito de Heroku
            </a>
            &nbsp;, entonces en la primera carga el servidor se podrá tardar
            unos 15 segundos de carga. Muchas gracias.
          </p>
        }
        techStack={[
          "ReactJS",
          "NodeJS",
          "MongoDB",
          "Flask",
          "OpenCV",
          "Stripe",
          "GoogleMapsAPI",
          "Sass",
        ]}
        description={
          <p>
            Soy fundador de Dog Finder, una plataforma web que ayuda a encontrar
            mascotas perdidas con <span>Inteligencia Artificial.</span>
          </p>
        }
        difficulties={
          <p>
            Este proyecto me enseñó a estructurar la arquitectura de un proyecto
            full stack. A como implementar <span>diferentes APIs</span>, bases
            de datos y funcionalidades; como google maps, stripe, inteligencia
            artificial, bots, etc.
          </p>
        }
        solution={
          <p>
            Para este proyecto, primero hice una estructura muy detallada de
            toda la plataforma. Incluyendo todas las APIs, y cómo y cuándo se
            irían a <span>conectar con el cliente.</span>
          </p>
        }
        notableFeatures={[
          "Inicio de sesión con Google",
          "Inicio de sesión con Facebook",
          "Bots que mandan información de los perros",
          "Google Maps",
          "Reconocimiento de imágenes",
          "Pagos mediante Stripe",
        ]}
      ></ProyectTech>
      <hr />
      <ProyectTech
        title="Lenguaje de programación"
        imgSrc={darkImg}
        linkProyect="https://dark-language.vercel.app/"
        linkSource="https://github.com/RodrigoTeran/Dark-Programming-Language"
        host={
          <p>
            Esta aplicación está siendo mantenida en&nbsp;
            <a href="https://vercel.com/" target="blank">
              Vercel
            </a>
          </p>
        }
        techStack={["ReactJS", "Moo", "Nearley", "Sass"]}
        description={
          <p>
            Desarrollé DARK, <span>un lenguaje de programación</span> que se
            puede usar desde el navegador. Su sintáxis está inspirada en
            javascript y python.
          </p>
        }
        difficulties={
          <p>
            Este proyecto me enseñó a como crear un lenguaje de programación
            desde cero. A como crear las estructuras de datos, y por qué los
            lenguajes profesionales son como son...
          </p>
        }
        solution={
          <p>
            Para este proyecto, tuve que aprender como{" "}
            <span>analizar el texto que el usuario pone</span>, y así poder
            convertirlo a lenguaje que la máquina entiende. Lo más difícil fue
            implementar funcionalidades que no existen en el lenguaje que usé
            para programar este lenguaje de programación.
          </p>
        }
        notableFeatures={[
          "Terminal integrada en la web",
          "Documentación del lenguaje",
          "Loops",
          "Condicionales",
          "Estructuras de datos",
          "Programación funcional",
        ]}
      ></ProyectTech>
      <hr />
      <ProyectTech
        title="Transformadas de Fourier"
        imgSrc={fourierImg}
        linkProyect="https://fourier-transforms-canvas.vercel.app/"
        linkSource="https://github.com/RodrigoTeran/Fourier-Transforms-Canvas"
        host={
          <p>
            Esta aplicación está siendo mantenida en&nbsp;
            <a href="https://vercel.com/" target="blank">
              Vercel
            </a>
          </p>
        }
        techStack={["ReactJS", "TypeScript", "Sass", "muchas mates..."]}
        description={
          <p>
            Desarrollé este&nbsp;
            <span>visualizador de transformadas de Fourier</span>. En esta
            página puedes hacer el dibujo que quieras, y luego se calculan las
            transformadas de Fourier que dibujan ese dibujo que hiciste.
          </p>
        }
        difficulties={
          <p>
            Este proyecto fue difícil ya que se necesitaban&nbsp;
            <span>manejar números complejos, integrales</span> y el poder
            dibujar en el canvas de una manera rápida y eficiente.
          </p>
        }
        solution={
          <p>
            Por eso utilicé TypeScript, ya que con los tipos de variable
            es&nbsp;
            <span>más seguro escribir código</span>, y así ningún cálculo sale
            mal.
          </p>
        }
        notableFeatures={["Canvas para dibujar", "Animaciones de los vectores"]}
      ></ProyectTech>
    </article>
  );
}
