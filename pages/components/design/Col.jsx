import styles from "../../../public/govuk/main.module.css";
import { GovContext } from "./GovProvider";
import { useContext } from "react";
import ss from "../utils/ss";

var Col = ({ gcol, gcolO, gdk, children, className, dg = false }) => {
  const { columns, desktop } = useContext(GovContext);

  gcol = columns[gcol] === undefined ? "" : columns[gcol];
  gdk = desktop[gdk] === undefined ? "" : desktop[desktop];
  dg = dg ? styles.debug : "";

  return (
    <>
      <div className={`${gcol} ${gcolO} ${gdk} ${className} ${dg}`}>
        {children}
      </div>
      <style jsx>
        {`
          .border {
            // background: #fcfbfa;
            // padding: 5vw 5vw 3vw 5vw;
            // // margin-top: 27vw;
            // // margin-left: 10vw;
            // // position: relative;
            // // z-index: 999;

            // border-image-slice: 1;
            // box-shadow: 5px 5px 0px 0px #000;
            // border-image: linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213));

            border: 0px;
            border-bottom: 4px solid;
            border-right: 4px solid;
            border-image: linear-gradient(
              to right,
              rgb(0, 210, 255),
              rgb(58, 123, 213)
            );
            border-image-slice: 1;
            border-image-width: 0px 10px 10px 0px;
            color: white;
            padding: 0;
            // margin: auto;
            // text-decoration: none;
            box-sizing: content-box;
          }

          * {
            font-family: "National 2" !important;
          }
        `}
      </style>
    </>
  );
};

Col = ss(Col);

export default Col;

// multi select
