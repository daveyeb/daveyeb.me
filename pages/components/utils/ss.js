import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  width,
  minWidth,
  height,
  minHeight,
} from "styled-system";

const ss = (tag) => {
  return styled(tag)(
    compose(
      space,
      color,
      layout,
      typography,
      flexbox,
      border,
      background,
      position,
      grid,
      shadow,
      width,
      minWidth,
      height,
      minHeight
    )
  );
};
export default ss;
