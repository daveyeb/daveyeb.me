import { useState } from "react";

const NavLink = ({pages}) => {
  var [clicked, setClicked] = useState(false);
  var [links, updateLinks] = useState(pages);
  var pos = 0;

// .  01     12         2
//  [blog, projects, playlists]

  

  return (
    <>
      <div className="nav-item d-flex red rel row overflow-hidden">
        <a
          className={`${clicked ? "pprev position-absolute" : ""}`}
          onClick={() => {
            setClicked(true);
          }}
          onAnimationEnd={() => {
            updateLinks(links.concat(links.splice(0, 1)));
            console.log(links);
            setClicked(false);
          }}
        >
          {links[pos]}
        </a>
        <a className={`${clicked ? "nprev" : "d-none"}`}>{links[pos + 1]}</a>
      </div>

      <div className="nav-item d-flex red rel row overflow-hidden">
        <a
          className={`${clicked ? "pprev position-absolute" : ""}`}
          onClick={() => {
            setClicked(true);
          }}
          onAnimationEnd={() => {
            // updateLinks(links.concat(links.splice(0, 1)));
            console.log(links);
            setClicked(false);
          }}
        >
          {links[pos + 1]}
        </a>
        <a className={`${clicked ? "nprev" : "d-none"}`}>{links[pos + 2]}</a>
      </div>


      <div className="nav-item d-flex red rel row overflow-hidden">
        <a
          className={`${clicked ? "pprev position-absolute" : ""}`}
          onClick={() => {
            setClicked(true);
          }}
          onAnimationEnd={() => {
            // updateLinks(links.concat(links.splice(0, 1)));
            console.log(links);
            setClicked(false);
          }}
        >
          {links[pos + 2]}
        </a>
        <a className={`${clicked ? "nprev" : "d-none"}`}>{links[pos + 3]}</a>
      </div>
      <style jsx>
        {`
          a {
            line-height: 1;
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
            // width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default NavLink;
