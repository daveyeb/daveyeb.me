// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import { content, padding, colSize, line, margin } from "./design/Styles";

export const Container = cxs("div")({
  display: "flex",
  flexWrap: "wrap",
  minHeight: "100vh",
  color: "#333",
  ...margin.m(2.5),
  ...content.around,
  ...line.end,
  fontFamily: "Maelstrom-Sans-Bold",
});

export const Content = cxs("div")({
  ...colSize(12),
  ...content.start,
  ...padding.p(0),
  ...margin.t(3),
  // ...margin.t(3),
  // ...margin.l(1.5),
  // ...margin.r(1.5),
});

export const LineDrawing = cxs("div")({
  ...colSize(10),
});

export const Directive = cxs("span")({});

export const Image = cxs("img")({}); // will be converted to svg
