import Head from "next/head";
import {
  createContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  Fragment,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

// Languages
import useTranslation from "next-translate/useTranslation";

// App Context
interface ValueAppProvider {
  isLayoutMsg: boolean;
  setIsLayoutMsg: Dispatch<SetStateAction<boolean>>;
  layoutMsgData: MutableRefObject<LayoutMsgData>;
  aboutRef: any;
  experienceRef: any;
  workRef: any;
  contactRef: any;
  setIsModalLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Partial<ValueAppProvider>>({});

// Type LayotuMsg Data
type LayoutMsgData = {
  type: "info" | "success" | "warning";
  title: string;
  msg: string;
};

// Styles
import "../styles/globals.scss";

// Variants
import { layoutVariants } from "../components/Variants/Layout";

// Components
import Layout from "../components/Layout/index";
import Nav from "../components/Nav/index";
import SocialMedia from "../components/SocialMedia/index";
import WindowModalLoading from "../components/Loader/LayoutLoader/index";
import Msgs from "../components/Msgs/index";

export default function PortfolioApp({ Component, pageProps }) {
  // Layout Msgs
  const [isLayoutMsg, setIsLayoutMsg] = useState(false); // Appear or not appear
  const layoutMsgData = useRef<LayoutMsgData>({
    type: "info",
    title: "",
    msg: "",
  });

  // Languages
  const { t } = useTranslation("common");

  // LayoutLoader
  const [isModalLoading, setIsModalLoading] = useState(true);

  // Refs
  const aboutRef = useRef(null); // About Page Ref
  const workRef = useRef(null); // Work Page Ref
  const experienceRef = useRef(null); // Experience Page Ref
  const contactRef = useRef(null); // Contact Page Ref

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <AppContext.Provider
        value={{
          // Layout Msgs
          isLayoutMsg,
          setIsLayoutMsg,
          layoutMsgData,

          // Refs
          aboutRef,
          experienceRef,
          workRef,
          contactRef,

          // Loader
          setIsModalLoading,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {isLayoutMsg ? (
            <Fragment key="layoutmsgs">
              <Msgs
                toggle={setIsLayoutMsg}
                type={layoutMsgData.current.type}
                title={layoutMsgData.current.title}
                msg={layoutMsgData.current.msg}
              ></Msgs>
            </Fragment>
          ) : null}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {isModalLoading ? (
            <Fragment key="layoutLoader">
              <WindowModalLoading></WindowModalLoading>
            </Fragment>
          ) : (
            <motion.div
              key="content"
              variants={layoutVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Layout></Layout>
              <Nav></Nav>
              <div className="layout" key="layout">
                <SocialMedia></SocialMedia>
                <main className="layout_content">
                  <Component {...pageProps} />
                </main>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AppContext.Provider>
    </>
  );
}
