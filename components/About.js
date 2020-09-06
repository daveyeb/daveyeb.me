// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import {
  content,
  padding,
  colSize,
  line,
  margin,
  colOffset,
  row,
  rowTall,
} from "./design/Styles";

export const Container = cxs("div")({
  ...row,
  color: "#333",
  ...content.start,
  fontFamily: "GT-Pressura-Pro-Mono-Light",
  "@media screen and (min-width: 62em)": {
    minHeight: "80vh",
  },
});

export const Content = cxs("div")({
  ...colSize(10),
  ...padding.t(5),
  ...line.top,
  borderTop: "2px solid #1d70b8",
  margin: "0 auto",
  "@media screen and (min-width: 62em)": {
    ...colSize(7.125),
  },
});
