import React, { useContext } from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";
import { default as cxss } from "cxs";

import { padding, content, row, line, colSize } from "./design/Styles";
import { A } from "./design";
import MenuStatusContext from "./MenuStatusContext";
import WindowDimensionContext from "./WindowDimensionContext";

const Container = cxs("header")({
  fontFamily: "GT-Pressura-Pro-Mono-Light",
  borderBottom: "1px solid",
  boxShadow: `0 3px 6px rgba(0,0,0,0.04)`,
  height: "33px",
  ...padding.p(1),
});

const Content = cxs("div")({
  ...padding.p(1),
});

const Nav = cxs("nav")({
  ...row,
  ...content.between,
  "@media screen and (min-width: 62em)": {
    ...row,
    ...content.around,
  },
});

const Controller = cxs("div")({
  ...row,
  ...content.around,
  ...line.middle,
  ...colSize(12),
  "@media screen and (min-width: 62em)": {
    ...row,
    ...content.around,
    ...line.middle,
    ...colSize(4),
  },
});

const Divider = cxs("div")({
  border: "1px solid",
  boxShadow: `90px 90px 90px rgba(0,0,0,0.04)`,
  height: "100%",
  display: "fixed",
});

const List = cxs("span")({
  ...row,
  ...colSize(10),
  ...content.around,
  ...line.middle,
  "@media screen and (min-width: 62em)": {
    ...row,
    ...colSize(7),
    ...content.around,
    ...line.middle,
  },
});

const Button = cxs("span")({
  height: "100%",
  ...row,
  ...colSize(2),
  ...content.between,
  ...line.middle,
  textTransform: "uppercase",
  "@media screen and (min-width: 62em)": {
    ...colSize(4),
    ...content.around,
  },
});

const Indicator = cxs("span")({
  ...row,
  ...colSize(3),
  ...content.between,
  "@media screen and (min-width: 62em)": {
    ...colSize(0),
    ...content.start,
  },
});

var Links = () => {
  return (
    <>
      <A href="/">
        ABOUT<sup>1</sup>
      </A>
      <A href="/">
        PROJECTS<sup>1</sup>
      </A>
      <A href="/">
        BLOG<sup>1</sup>
      </A>
    </>
  );
};

Links = cxs(Links)({
  color: "black",
});

const Header = ({ page }) => {
  const [status, setStatus] = useContext(MenuStatusContext);
  const [windowWidth, setWindowWidth] = useContext(WindowDimensionContext);

  return (
    <Container>
      <Content>
        <Nav>
          <A
            href="/"
            style={
              !status
                ? {
                    position: `${
                      windowWidth.width < 992 ? "absolute" : "relative"
                    }`,
                    display: "inline-block",
                    marginLeft: "14px",
                  }
                : {
                    display: `${
                      windowWidth.width < 992 ? "none" : "inline-block"
                    }`,
                    marginLeft: "14px",
                  }
            }
          >
            {windowWidth.width < 992 ? `DY` : `david yeboah, scientist`}
          </A>
          <Controller>
            <List
              style={
                !status
                  ? {
                      justifyContent: "flex-end",
                      textAlign: "end",
                    }
                  : { justifyContent: "space-around" }
              }
            >
              {status ? <Links /> : <Indicator>{page}</Indicator>}
            </List>
            <Button>
              <Divider />
              <A href="/" onClick={() => setStatus(!status)}>
                menu
              </A>
            </Button>
          </Controller>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
