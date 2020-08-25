import React, { useEffect, useState } from "react";
// eslint-disable-next-line node/no-unpublished-import
import ReactGA from "react-ga";

import MenuStatusContext from "../components/MenuStatusContext";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-176178393-1");
      window.GA_INITIALIZED = true;
    }

    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  });

  const [status, setStatus] = useState(false);

  return (
    <MenuStatusContext.Provider value={[status, setStatus]}>
      <Component {...pageProps} />
    </MenuStatusContext.Provider>
  );
};

export default MyApp;
