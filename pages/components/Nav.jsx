import { useState } from "react";
import NavLink from "./atom/NavLink";

const Nav = () => {
  return (
    <>
      <div className="col-sm-1 row nav p-3 red">
        <div className="p-0">
          <span className="">home</span>
        </div>
        <div className="align-skelf-end ovdsferflow-hidden">
          <NavLink pages={['blog', 'projects', 'playlists', 'home']}></NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
