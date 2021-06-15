import Head from "next/head";

// Components
import Header from "../components/Header/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio personal - Rodrigo Terán Hernández</title>
        <meta
          name="description"
          content="Portafolio personal de Rodrigo Terán Hernández."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </>
  );
}
