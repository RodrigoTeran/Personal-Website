// Modules
import { createContext, Dispatch, SetStateAction, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

// App Context
interface ValueAppProvider {
  isLayoutAnimationOpen: boolean;
  setIsLayoutAnimationOpen: Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<Partial<ValueAppProvider>>({});

// Styles
import "../styles/global.scss";

// Components
import AnimationLayout from "../components/animations/Layout/index";

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  // Translation
  const { t } = useTranslation("common");

  // Layout animation
  const [isLayoutAnimationOpen, setIsLayoutAnimationOpen] =
    useState<boolean>(true);

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
        }}
      >
        <main>
          <AnimationLayout>
            <Component {...pageProps} />
          </AnimationLayout>
        </main>
      </GlobalContext.Provider>
    </>
  );
}
