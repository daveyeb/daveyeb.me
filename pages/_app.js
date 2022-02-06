import "../styles/globals.css";
import { space, layout, color } from "styled-system";
import styled, { ThemeProvider } from "styled-components";
import theme from "./components/utils/theme";

import { GovProvider } from "./components/design/GovProvider";

function MyApp({ Component, pageProps }) {
  Component = styled(Component)(space, layout, color);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GovProvider>
          <Component {...pageProps} />
        </GovProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
