import React, { useContext } from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import { padding, content, row, line, colSize } from "./design/Styles";
import { A } from "./design";
import MenuStatusContext from "./MenuStatusContext";
import WindowDimensionContext from "./WindowDimensionContext";

const Container = cxs("header")({
  fontFamily: "GT-Pressura-Pro-Mono-Light",
  borderBottom: "1px solid #232421",
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
    ...content.between,
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
  borderRight: "1px solid #232421",
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
    ...content.between,
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
  const [status, setStatus] = useContext(MenuStatusContext);

  return (
    <>
      <A href="/about" onClick={() => setStatus(false)}>
        ABOUT<sup>1</sup>
      </A>
      <A href="/projects" onClick={() => setStatus(false)}>
        PROJECTS<sup>1</sup>
      </A>
      <A href="/blog" onClick={() => setStatus(false)}>
        BLOG<sup>0</sup>
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
            onClick={() => setStatus(false)}
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
              <A href="" onClick={() => setStatus(!status)}>
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
