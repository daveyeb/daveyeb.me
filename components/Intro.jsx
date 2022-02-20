import Image from "next/image";
import ss from "../utils/ss";
import styles from "../public/styles/design.module.css";
import self from "../public/images/IMG_0146.JPG";
import gov from "../public/styles/main.module.css";

const dg = styles.dg;

var Salut = ({ className }) => {
  return (
    <>
      {/* <div><strong class={` ${gov["govuk-tag"]} ${gov["govuk-tag--red"]}`}>live</strong></div> */}
      <div
        className={`${className} ${styles["flow"]} intro wrapper  ${styles["col-md-8"]} ${styles["col-md-offset-1"]} ${styles["start-xs"]} `}
      >
        <h1 className={`salut  ${styles["pt3"]} `}>Hola I'm David</h1>
        <ul className={`bckgrnd ${styles["flow"]} ${styles["pb5"]}`}>
          <li className="">
            <sup>
              <sup>
                <sup className="___mobile">1</sup>
              </sup>
            </sup>
            Software Engineer currently based in Raleigh
          </li>
          <li>
            <sup>
              <sup>
                <sup className="___mobile">2</sup>
              </sup>
            </sup>
            Providing support and tooling to internal brokers to deal with
            potential PnLs
          </li>
          <li>
            <sup>
              <sup>
                <sup className="___mobile">3</sup>
              </sup>
            </sup>
            Computer Science graduate from Oswego State
          </li>
          <li>
            <sup>
              <sup>
                <sup className="___mobile">4</sup>
              </sup>
            </sup>
            Engineer at Deutsche Bank
          </li>
        </ul>
      </div>
    </>
  );
};

Salut = ss(Salut);

const Intro = () => {
  return (
    <>
      <div className={`${styles.row} full `}>
        <div className={`in__container ${styles.row} `}>
          <Salut className={``}></Salut>
        </div>
        <div
          className={`${styles["col-md-8"]} image ${styles["col-xs-offset-3"]}`}
        >
          <Image className="___mobile" src={self} />
        </div>
      </div>
      <style jsx global>{`
        .in__container {
          // height: 100vh;
          z-index: 1;
        }

        @media only screen and (max-width: 48em) {
          .___mobile {
            display: none !important;
          }
        }
        

        .intro {
          padding: 20px !important;
          border: 1px solid #000;
          
          background-color: #fff;
          box-shadow: 5px 5px 0px 0px #000;
        }

        .full {
          // height: 100vh;
          // position: absolute;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(50%);
        }

        h1 {
          font-family: "Varela Round", sans-serif;
        }

        .image {
          position: absolute;
          z-index: -1;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
        }

        @media only screen and (min-width: 72em) {
          .image {
            top: 25%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }

          .intro {
            // padding-top: 5px !important;
          }
        }

        @media only screen and (min-width: 92em) {
          .image {
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }

          .intro {
            // padding-top: 5px !important;
          }
        }

        @media only screen and (min-width: 48em) {
          .in__container {
            margin-top: 0;
          }
        }

        .salut {
          font-size: var(--fs-700);
          font-weight: 400;
        }

        .bckgrnd {
          // padding-right: 1em;
          font-size: var(--fs-600);
          font-weight: 300;
          opacity: 0.85;
        }

        .wrapper {
          padding: 0;
        }

        ul,
        h1 {
          padding: 0;
          margin: 0;
        }

        ul {
          list-style-type: none;
        }

        sup {
          position: absolute;
          // left: %;
          color: tomato;
          font-size: var(--fs-300);
          // font-family: "Varela Round", sans-serif;
        }

        strong {
          font-family: "BDR Mono" !important;
        }
      `}</style>
    </>
  );
};

export default ss(Intro);
