import { useContext, useEffect, useState } from "react";
import { NavContext } from "./NavContext";
import { append } from "./util";

export const DigitalLink = ({ children, index, direction }) => {
  const [links, setLinks, meta, updateMeta, disabled, setDisabled] = useContext(NavContext);
  const [loading, setLoading] = useState(true);

  const [curr, setCurr] = useState("");
  const [next, setNext] = useState("");

  var getNext = () => {
    if(disabled) return

    setDisabled(true);
    setNext(meta.active);
    updateMeta(Object.assign(meta, { active: curr }));
  };

  var reset = () => {
    setCurr(next);
    setNext("");
    setDisabled(false);
  };

  useEffect(() => {
    setLinks(append(links, children));
    updateMeta(Object.assign(meta, { links }));
    
    if (curr === "") setCurr(links[index]);

    setLoading(false);
  }, [links, curr, next]);

  return loading ? (
    <>still lsoading</>
  ) : (
    <>
      <div className="row position-relative overflow-hidden p-1">
        <a
          onClick={getNext}
          onAnimationEnd={reset}
          className={`${next !== "" ? "prev position-absolute ibm-motion-prod-move-ease-in-out ibm-motion-prod-move-dur-10" : ""}`}
        >
          <span className={`dotted ${disabled ? '' : 'pointer'}`}>{curr}</span>
        </a>
        <a className={`${next !== "" ? "next" : "d-none"}`}>{next}</a>
      </div>
      <style jsx>{`
        a {
          text-decoration: none !important;
          color: rgba(0,0,12,.69);
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

        .next {
          animation: ${direction} 0.5s forwards;
        }

        .prev {
          animation: p___${direction} 0.5s forwards;
        }
      `}</style>
    </>
  );
};
