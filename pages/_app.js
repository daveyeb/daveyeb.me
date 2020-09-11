import React, { useEffect, useState } from "react";
// eslint-disable-next-line node/no-unpublished-import
import ReactGA from "react-ga";

import MenuStatusContext from "../components/MenuStatusContext";
import WindowDimensionContext from "../components/WindowDimensionContext";

const MyApp = ({ Component, pageProps }) => {
  const [status, setStatus] = useState(false);
  const [windowWidth, setWindowWidth] = useState({});

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-176178393-1");
      window.GA_INITIALIZED = true;
    }

    window.addEventListener("onRouterChange", () => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    });

    function handleWidth() {
      setWindowWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleWidth);
    handleWidth();

    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("onRouterChange", () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      });
    };
  }, []);

  return (
    <WindowDimensionContext.Provider value={[windowWidth, setWindowWidth]}>
      <MenuStatusContext.Provider value={[status, setStatus]}>
        <Component {...pageProps} />
      </MenuStatusContext.Provider>
    </WindowDimensionContext.Provider>
  );
};

export default MyApp;
