import { useContext, useEffect, useState } from "react";
import { NavContext } from "./NavContext";
import { Link } from '@carbon/react';

export const DigiLink = ({ page, onPress }) => {
  const [ref, setRef] = useState(page);
  const [next, setNext] = useState("");
  const [pages, setPages, disabled, setDisabled] = useContext(NavContext);

  const reset = () => {
    setRef(next);
    setNext("");
    setDisabled(false);
  };

  const update = () => {
    if (onPress === undefined || disabled) return;

    setDisabled(true);
    setNext(onPress());
    setPages(Object.assign({}, pages, { active: ref }));
  };

  useEffect(() => {
    if (onPress === undefined) {
      if (ref.localeCompare(pages.active) == 0) return;
      setNext(pages.active);
    }
  }, [pages]);

  return (
    <>
      <div className="rel row overflow-hidden">
        <a
          className={`${next !== "" ? "pprev position-absolute" : ""}
          ${onPress === undefined ? "" : " pointer "}"`}
          onAnimationEnd={reset}
          onClick={update}
        >
          <span className="dotted">{ref}</span>
        </a>
        <a className={`${next !== "" ? "nprev" : "d-none"}`}>{next}</a>
      </div>
      <style jsx>
        {`
          a {
            padding: 0;
            text-decoration: none !important;
            color: inherit !important;
            text-rendering: optimizeLegibility;
            cursor: default;
          }

          .pointer {
            cursor: pointer;
          }

          .dotted {
            border-bottom: 1px dotted #9b9b9b;
          }

          .dotted:hover {
            border-bottom: none;
            color: #0021e5 !important;
          }

          .pprev {
            animation: p___up 0.5s forwards;
          }

          .nprev {
            animation: up 0.5s forwards;
          }
        `}
      </style>
    </>
  );
};
