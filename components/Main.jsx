import styles from "../public/styles/main.module.css";
import ss from "../utils/ss";

const wrapper = {
    main: styles["govuk-main-wrapper"],
  };
  
  const Main = ({ children, type }) => {
    return (
      <>
        <main className={wrapper[type]}>{children}</main>
      </>
    );
  };
  
  export default ss(Main);
  