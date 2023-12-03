// Modules
import { createContext, Dispatch, SetStateAction, useRef, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export type Refs = "about-me" | "experience" | "skills" | "projects" | "contact-me";

// App Interface
interface ValueAppProvider {
  isLayoutAnimationOpen: boolean;
  setIsLayoutAnimationOpen: Dispatch<SetStateAction<boolean>>;
  isModalImgOpen: boolean;
  setIsModalImgOpen: Dispatch<SetStateAction<boolean>>;
  modalImgState: PropsImgModal;
  setModalImgState: Dispatch<SetStateAction<PropsImgModal>>;
  aboutMeRef: any;
  experienceRef: any;
  skillsRef: any;
  projectsRef: any;
  contactMeRef: any;
  goTo: (
    place: Refs
  ) => void
}
export const GlobalContext = createContext<Partial<ValueAppProvider>>({});

// Styles
import "../styles/global.scss";

// Components
import AnimationLayout from "../components/animations/Layout/index";

// Context
import MessagesContext from "../context/Messages.context";

// Modals
import ImgModal from "../components/Modals/ImgModal/index";

// Types
import type { Props as PropsImgModal } from "../components/Modals/ImgModal/index";

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  // Translation
  const { t } = useTranslation("common");

  // Layout animation
  const [isLayoutAnimationOpen, setIsLayoutAnimationOpen] =
    useState<boolean>(true);

  // Modal imgs
  const [isModalImgOpen, setIsModalImgOpen] = useState<boolean>(false);
  const [modalImgState, setModalImgState] = useState<PropsImgModal>({
    src: "",
    alt: "",
  });

  // Go-to
  // Refs
  const aboutMeRef = useRef<any>(null);
  const experienceRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactMeRef = useRef<any>(null);

  const getTop = (component: any): number => {
    // It computes the distance that exista bewteen a component and the top of the whole website
    try {
      if (!document) return 0;
      if (!document.scrollingElement) return 0;

      return parseInt(
        component.getBoundingClientRect().top +
        document.scrollingElement.scrollTop
      );
    } catch {
      // Error
      return 0;
    }
  };

  const goTo = (place: Refs): void => {
    /**
     * Is substract 100 beacuse that is the height of the nav
     * So, the nav doesnt interfer
     */
    const places: any = {
      "about-me": aboutMeRef,
      "experience": experienceRef,
      "skills": skillsRef,
      "projects": projectsRef,
      "contact-me": contactMeRef
    }

    const top = getTop(places[place].current) - 100;
    // No Error
    window.scroll({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("title")} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1d1d1d" />
        <meta
          name="keywords"
          content={`Rodrigo Terán, Programación, Programming, Coding, Web Developer, Desarrollador Web`}
        />
        <meta
          property="og:image:secure_url"
          content="https://www.rodrigoteran.dev/images/logo.png"
        />
        <meta property="og:url" content="https://www.rodrigoteran.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t("title")} />
        <meta
          name="twitter:image"
          content="https://www.rodrigoteran.dev/images/logo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:alt" content="Rodrigo Terán" />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("title")} />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:description" content={t("title")} />
      </Head>
      <GlobalContext.Provider
        value={{
          isLayoutAnimationOpen,
          setIsLayoutAnimationOpen,
          isModalImgOpen,
          setIsModalImgOpen,
          modalImgState,
          setModalImgState,
          aboutMeRef,
          experienceRef,
          skillsRef,
          projectsRef,
          contactMeRef,
          goTo
        }}
      >
        <MessagesContext>
          {/* Modal images */}
          <ImgModal />
          <main>
            <AnimationLayout>
              <Component {...pageProps} />
            </AnimationLayout>
          </main>
        </MessagesContext>
      </GlobalContext.Provider>
    </>
  );
}
