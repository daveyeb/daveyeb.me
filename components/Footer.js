import React from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

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
  ...content.start,
  ...line.middle,
});

const Divider = cxs("div")({
  borderBottom: "1px solid",
  ...colSize(12),
});

const ContactInfo = cxs("p")({
  fontSize: ".7rem",
  ...colSize(8),
  ...padding.p(2),
});

const CopyRight = cxs("div")({
  fontSize: ".8rem",
  textTransform: "uppercase",
  ...colSize(12),
  ...order.last,
  ...content.center,
});

const Separator = cxs("div")({
  border: "1px solid",
  height: "1.5em",
});

const ReturnToTop = cxs("div")({
  ...colSize(2),
  ...row,
  ...content.around,
  fontSize: "1.4rem",
  ...colOffset(0.8),
  ...padding.b(0.4),
});

const Footer = () => {
  return (
    <Container>
      <Divider />
      <CopyRight> © 1995-2020 daveyeb </CopyRight>
      <ContactInfo>
        This website is built and designed by myself on React.js. <Break />
        Feel free to look/reuse some <A href="/">code</A> or shoot me an{" "}
        <A href="/">email</A> :)
      </ContactInfo>
      <ReturnToTop>
        <A href="/">&#8962;</A>
      </ReturnToTop>
    </Container>
  );
};

export default Footer;
