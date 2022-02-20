import styles from "../public/styles/main.module.css";
import ss from "../utils/ss" // styled system 

const types = {
  novisitedstate: styles["govuk-link--no-visited-state"],
  nounderline: styles["govuk-link--no-underline"],
};

const A = ({ children, className, href }) => {
  return (
    <>
        <a
          href={href}
          className={`${className} ${styles["govuk-link"]} ${types.novisitedstate} ${types.nounderline}`}
        >
          {children}
        </a>
      <style jsx>
        {`
          a {
            font-family: "BDR Mono" !important;
            // font-size: var(--fs-300);
            font-weight: normal;
            color: #292929 !important;
          }
        `}
      </style>
    </>
  );
};

export default ss(A);
