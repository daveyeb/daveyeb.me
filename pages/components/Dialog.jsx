import { useState } from "react";

const Dialog = ({ title, children, color}) => {
  const [isMouseEvent, setMouseEvent] = useState(false);
  return (
    <>
      <div className="inline-block relative">
        <span className={`__3270 ${color}`} onMouseOver={() => setMouseEvent(true)}>
          {title}
        </span>
        <div
          className={`__content absolute bg-white ${
            !isMouseEvent ? "hidden" : ""
          }`}
          onMouseLeave={() => setMouseEvent(false)}
        >
          <span className="__3270 underline">{title}</span>
          <div className="__3270 mt-2">{children}</div>
        </div>
      </div>
      <style jsx>{`
        .__content {
          z-index: 1;
          border: 0.2vh solid black;
          font-size: 1.6vh;
          padding: 0.8vh;
          padding-right: 1vh;
          width: 36vh;
          top: 0;
        }

        .__3270 {
          font-family: "IBM 3270 Semi-Condensed";
        }
      `}</style>
    </>
  );
};

export default Dialog
