import { useState } from "react";

const NavLink = () => {
  var [clicked, setClicked] = useState(false);
  var [links, updateArr] = useState(["blog", "projects"]);


  var curr = 0;
  return (
    <>
      <div className="nav-item d-flex row display1 rel re/d overflow-hidden">
        <a
          className={`${clicked ? "pprev position-absolute re/d" : ""} `}
          onClick={() => {
            setClicked(true);
          }}
          onAnimationEnd={() => {
            updateArr(links.concat(links.splice(0, 1)));
            console.log(links);
            setClicked(false);
          }}
        >
          {links[0]}
        </a>
        <a className={`${clicked ? "nprev " : "d-none"}`}>{links[1]}</a>
      </div>
      <div className="nav-item d-flex row display1 rel re/d overflow-hidden">
        <a
          className={`${clicked ? "pprev position-absolute re/d" : ""} `}
          onClick={() => {
            setClicked(true);
          }}
          onAnimationEnd={() => {
            updateArr(links.concat(links.splice(0, 1)));
            console.log(links);
            setClicked(false);
          }}
        >
          {links[0]}
        </a>
        <a className={`${clicked ? "nprev " : "d-none"}`}>{links[1]}</a>
      </div>
      <style jsx>
        {`
          a {
            display: block;
            // margin-bottom: -15px;
            line-height: 1;
            // overflow: hidden;
            padding: 0;
            text-decoration: none !important;
            color: inherit !important;
          }

          .nprev {
            animation: up 0.5s forwards;
          }

          .nnext {
            animation: down 0.5s forwards;
          }

          .pprev {
            animation: p___up 0.5s forwards;
          }

          .pnext {
            animation: p___down 0.5s forwards;
          }

          .nav-item {
            // height: 61px;
            // display:flex;
          }
        `}
      </style>
    </>
  );
};

export default NavLink;
