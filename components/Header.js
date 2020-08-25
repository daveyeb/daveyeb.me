import React, { useContext } from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import { padding, content, row, line, colSize } from "./design/Styles";
import { A } from "./design";
import MenuStatusContext from "./MenuStatusContext";

const Container = cxs("header")({
  fontFamily: "GT-Pressura-Pro-Mono-Light",
  borderBottom: "1px solid",
  height: "33px",
  ...padding.b(1),
});

const Content = cxs("div")({
  ...padding.p(1),
});

const Nav = cxs("nav")({
  ...row,
  ...content.around,
});

const Controller = cxs("div")({
  ...row,
  ...content.around,
  ...line.middle,
  ...colSize(4),
});

const Divider = cxs("div")({
  border: "1px solid",
  height: "100%",
  display: "fixed",
});

const List = cxs("span")({
  ...row,
  ...colSize(7),
  ...content.around,
  ...line.middle,
});

const Button = cxs("span")({
  ...row,
  ...colSize(4),
  height: "100%",
  ...content.around,
  ...line.middle,
  textTransform: "uppercase",
});

const Indicator = cxs("span")({});

const Links = () => {
  return (
    <>
      <A href="">
        ABOUT<sup>1</sup>
      </A>
      <A href="">
        PROJECTS<sup>1</sup>
      </A>
      <A href="">
        BLOG<sup>1</sup>
      </A>
    </>
  );
};

const Header = ({ page }) => {
  const [status, setStatus] = useContext(MenuStatusContext);

  return (
    <Container>
      <Content>
        <Nav>
          <A href="/">david yeboah, scientist</A>
          <Controller>
            <List
              style={
                !status
                  ? {
                      "justify-content": "flex-end",
                      "text-align": "end",
                    }
                  : { "justify-content": "space-around" }
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
