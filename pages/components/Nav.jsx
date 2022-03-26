import { useState } from "react";
import NavLink from "./atom/NavLink";

const Nav = () => {
  var [clicked, setClicked] = useState(false);
  var [ended, setEnded] = useState(false);

  console.log(clicked);

  return (
    <>
      <div className="col-sm-1 nav p-3">
        <span>home</span>
        <div className="d-flex justify-content-end nav-items ">
            <NavLink></NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
