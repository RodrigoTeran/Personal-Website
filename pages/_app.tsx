import {
  createContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

// App Context
interface ValueAppProvider {
  isLayoutMsg: boolean;
  setIsLayoutMsg: Dispatch<SetStateAction<boolean>>;
  layoutMsgData: MutableRefObject<LayoutMsgData>;
  isInLayoutLoader: boolean;
  setIsInLayoutLoader: Dispatch<SetStateAction<boolean>>;
  aboutRef: any;
  workRef: any;
  contactRef: any;
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

const PortfolioApp = ({ Component, pageProps }) => {
  // Layout Msgs
  const [isLayoutMsg, setIsLayoutMsg] = useState(false); // Appear or not appear
  const layoutMsgData = useRef<LayoutMsgData>({
    bg: "",
    textColor: "",
    title: "",
    text: "",
  });

  // LayoutLoader
  const [isInLayoutLoader, setIsInLayoutLoader] = useState(false);

  // Refs
  const aboutRef = useRef(null); // About Page Ref
  const workRef = useRef(null); // Work Page Ref
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
        workRef,
        contactRef,
      }}
    >
      <Layout></Layout>
      <Nav></Nav>
      <div className="layout">
        <SocialMedia></SocialMedia>
        <div className="layout_content">
          <Component {...pageProps} />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default PortfolioApp;
