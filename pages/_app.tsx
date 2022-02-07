import { createContext } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

// App Context
interface ValueAppProvider {}

export const AppContext = createContext<Partial<ValueAppProvider>>({});

// Styles
import "../styles/global.scss";

// Components

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("common");

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
      <AppContext.Provider value={{}}>
        <main>
          <Component {...pageProps} />
        </main>
      </AppContext.Provider>
    </>
  );
}
