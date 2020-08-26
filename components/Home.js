// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import { content, padding, colSize, line } from "./design/Styles";

export const Container = cxs("div")({
  display: "flex",
  flexWrap: "wrap",
  minHeight: "100vh",
  color: "#333",
  ...content.around,
  ...line.end,
  fontFamily: "GT-Pressura-Pro-Mono-Regular",
});

export const Content = cxs("div")({
  ...colSize(6),
  ...content.start,
  ...padding.b(3),
  margin: "12% 0",
});

export const LineDrawing = cxs("div")({
  ...colSize(5),
});

export const Directive = cxs("span")({});

export const Image = cxs("img")({}); // will be converted to svg
