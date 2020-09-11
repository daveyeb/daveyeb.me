import React, { useContext } from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";
import WindowDimensionContext from "./WindowDimensionContext";

import {
  row,
  content,
  line,
  colOffset,
  colSize,
  padding,
  order,
} from "./design/Styles";
import { A, Break } from "./design";

const Container = cxs("footer")({
  fontFamily: "GT-Pressura-Pro-Mono-Light",
  width: "90%",
  ...row,
  margin: "auto auto",
  ...content.between,
  ...line.middle,
  "@media screen and (min-width: 62em)": {
    width: "60%",
  },
});

const Divider = cxs("div")({
  borderBottom: "1px solid #232421",
  ...colSize(12),
});

const ContactInfo = cxs("p")({
  fontSize: ".7rem",
  ...colSize(8),
  ...padding.p(2),
  "@media screen and (min-width: 62em)": {
    ...colSize(4),
  },
});

const CopyRight = cxs("div")({
  fontSize: ".8rem",
  textTransform: "uppercase",
  ...colSize(12),
  ...order.last,
  ...content.center,
  "@media screen and (min-width: 62em)": {
    ...colSize(2),
    order: 0,
  },
});

const Separator = cxs("div")({
  borderLeft: "1px solid #232421",
  height: "1.5em",
  "@media screen and (min-width: 62em)": {
    ...colSize(0),
    ...colOffset(0.125),
    order: 0,
  },
});

const ReturnToTop = cxs("div")({
  ...colSize(2),
  ...row,
  ...content.around,
  fontSize: "1.4rem",
  ...padding.b(0.4),
  "@media screen and (min-width: 62em)": {
    ...colSize(1),
    order: 0,
  },
});

const Footer = () => {
  const [windowWidth, setWindowWidth] = useContext(WindowDimensionContext);
  return (
    <Container>
      <Divider />
      <CopyRight> © 1995-2020 daveyeb </CopyRight>
      {windowWidth.width > 992 ? <Separator></Separator> : ``}
      <ContactInfo>
        This website is built and designed by myself on React.js. <Break />
        Feel free to look/reuse some{" "}
        <A href="https://github.com/daveyeb/daveyeb.com">code</A> or shoot me an{" "}
        <A href="mailto:daveyeb@gmail.com">email</A> :)
      </ContactInfo>
      <ReturnToTop>
        <A href="">&#8962;</A>
      </ReturnToTop>
    </Container>
  );
};

export default Footer;
