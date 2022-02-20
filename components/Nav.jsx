import A from "./A";
import styles from "../public/styles/design.module.css";
import ss from "../utils/ss";

const dg = styles.dg;

const Nav = ({ active, pages }) => {
  delete pages[active];

  return (
    <>
      <div className={`nav `}>
        <div className={`active  ___mobile ${styles["m1"]}`}>
          <A className={``}>{active}</A>
        </div>

        <div className={` pages  ${styles["m1"]}`}>
          {Object.keys(pages).map((page, i) => {
            // console.log(page);
            return (
              <>
                <A key={i} href={pages[page].to}>
                  {pages[page].title}
                </A>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          // .___mobile {
          //   display: none !important;
          // }

          @media only screen and (max-width: 48em) {
            .___mobile {
              display: none !important;
            }
          }

          .nav {
            height: 100vh;
            width: 10vw;
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: 100;
          }

          .active {
          }

          .pages {
            position: absolute;
            bottom: 0;
          }

          .full {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            padding: 0 15px;
          }
        `}
      </style>
    </>
  );
};

export default ss(Nav);
