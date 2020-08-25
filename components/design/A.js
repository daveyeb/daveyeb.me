import React from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";
import {default as NextLink} from "next/link";

const AStyled = cxs("a")({
  color: "#1d70b8",
  cursor: "pointer",
  fontSize: "inherit",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
  ":active": {
    color: "#0b0c0c",
    textDecoration: "none",
    outline: "3px solid transparent",
    backgroundColor: "#fd0",
    boxShadow: "0 -2px #fd0, 0 4px #0b0c0c",
    opacity: "1 !important",
  },
});

const A = ({ href, children, onClick }) => {
  return (
    <NextLink href={href}>
      <AStyled href={href} onClick={onClick}>
        {children}
      </AStyled>
    </NextLink>
  );
};

export default A;
