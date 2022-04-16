import { useContext, useEffect, useState } from "react";
import { NavContext } from "./NavContext";

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
        if(ref.localeCompare(pages.active) == 0) return
        setNext(pages.active);
    }
  }, [pages]);

  return (
    <>
      <div className="rel row overflow-hidden">
        <a
          className={`${next !== "" ? "pprev position-absolute" : ""}`}
          onAnimationEnd={reset}
          onClick={update}
        >
          {ref}
        </a>
        <a className={`${next !== "" ? "nprev" : "d-none"}`}>{next}</a>
      </div>
      <style jsx>
        {`
          // a {
          //   line-height: 1
          //   padding: 0
          //   text-decoration: none !important
          //   color: inherit !important
          // }

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
