import {
  createContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  Fragment,
} from "react";
import { AnimatePresence } from "framer-motion";

// App Context
interface ValueAppProvider {
  isLayoutMsg: boolean;
  setIsLayoutMsg: Dispatch<SetStateAction<boolean>>;
  layoutMsgData: MutableRefObject<LayoutMsgData>;
  isInLayoutLoader: boolean;
  setIsInLayoutLoader: Dispatch<SetStateAction<boolean>>;
  aboutRef: any;
  experienceRef: any;
  workRef: any;
  contactRef: any;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Partial<ValueAppProvider>>({});

// Type LayotuMsg Data
type LayoutMsgData = {
  bg: string;
  textColor: string;
  title: string;
  text: string;
};

// Styles
import "../styles/globals.scss";

// Components
import Layout from "../components/Layout/index";
import Nav from "../components/Nav/index";
import SocialMedia from "../components/SocialMedia/index";
import WindowModal from "../components/WindowModal/index";

export default function PortfolioApp({ Component, pageProps }) {
  // Layout Msgs
  const [isLayoutMsg, setIsLayoutMsg] = useState(false); // Appear or not appear
  const layoutMsgData = useRef<LayoutMsgData>({
    bg: "",
    textColor: "",
    title: "",
    text: "",
  });

  // Modal
  const [isModal, setIsModal] = useState(true);

  // LayoutLoader
  const [isInLayoutLoader, setIsInLayoutLoader] = useState(true);

  // Refs
  const aboutRef = useRef(null); // About Page Ref
  const workRef = useRef(null); // Work Page Ref
  const experienceRef = useRef(null); // Experience Page Ref
  const contactRef = useRef(null); // Contact Page Ref

  return (
    <AppContext.Provider
      value={{
        // Layout Msgs
        isLayoutMsg,
        setIsLayoutMsg,
        layoutMsgData,

        // Loader
        isInLayoutLoader,
        setIsInLayoutLoader,

        // Refs
        aboutRef,
        experienceRef,
        workRef,
        contactRef,

        // Modal
        setIsModal,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {isModal ? (
          <Fragment key="modal">
            <WindowModal></WindowModal>
          </Fragment>
        ) : (
          <>
            <Layout></Layout>
            <Nav></Nav>
            <div className="layout" key="layout">
              <SocialMedia></SocialMedia>
              <main className="layout_content">
                <Component {...pageProps} />
              </main>
            </div>
          </>
        )}
      </AnimatePresence>
    </AppContext.Provider>
  );
}
