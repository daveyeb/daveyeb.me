import Col from "./design/Col";
import Link from "./design/Link";
import ss from "./utils/ss";

var Pages = ({ children, className }) => {
  console.log(className);
  return (
    <>
      <div className={className}>{children}</div>
      <style jsx>
        {`
          .bottom {
            position: absolute;
            bottom: 0;
          }

          .debug {
            border: 1px solid red !important;
          }
        `}
      </style>
    </>
  );
};

Pages = ss(Pages);

const Nav = () => {
  return (
    <>
      <div className="nav ">
        <Col size={"full"} mt={1}>
          <Link>home</Link>
        </Col>
        <Pages className="bottom " mb={1}>
          <Col size={"full"} mb={1}>
            <Link>projects</Link>
          </Col>
          <Col size={"full"} mb={1}>
            <Link>blog</Link>
          </Col>

          <Col size={"full"} mb={1}>
            <Link>playlists</Link>
          </Col>
        </Pages>
      </div>

      <style jsx>
        {`
          .nav {
            height: 100vh;
            width: 10vw;
            position: absolute;
          }

          .debug {
            border: 1px solid red !important;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
