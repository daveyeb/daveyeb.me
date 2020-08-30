// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import { content, padding, colSize, line, margin } from "./design/Styles";

export const Container = cxs("div")({
  display: "flex",
  flexWrap: "wrap",
  color: "#333",
  ...margin.m(2.5),
  ...content.between,
  ...line.end,
  fontFamily: "Maelstrom-Sans-Bold",
  "@media screen and (min-width: 62em)": {
    minHeight: "87vh",
    ...padding.t(15),
  },
});

export const Content = cxs("div")({
  ...colSize(12),
  ...content.start,
  ...padding.p(0),
  ...margin.t(3),
  "@media screen and (min-width: 62em)": {
    ...colSize(6),
    ...content.start,
  },
  // ...margin.t(3),
  // ...margin.l(1.5),
  // ...margin.r(1.5),
});

export const LineDrawing = cxs("div")({
  ...colSize(10),
  "@media screen and (min-width: 62em)": {
    ...colSize(5),
  },
});

export const Directive = cxs("span")({});

export const Image = cxs("img")({}); // will be converted to svg
