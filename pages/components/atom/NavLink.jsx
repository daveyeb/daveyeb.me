import { useState } from "react";



const NavLink = () => {
  var [clicked, setClicked] = useState(false);
  var [ended, setEnded] = useState(false);

  var prev = 'blog'
  var next = 'projects'
  
  const switchLinks = () => {
    let temp = prev; 
    prev = next; 
    next = temp;      
  }

  return (
    <>
      <div className="nav-item display-1 rel overflow-hidden">
        <a
          className=
          {`
            ${clicked ? "pprev position-absolute " : ""} 
            ${ended ? "" : ""}`
          }
          onClick={() => setClicked(true)}
          onAnimationEnd={() => {
            setEnded(true)
            setClicked(false)
            switchLinks()
          }}
        >
          {prev}
        </a>
        <a className={`${clicked ? "nprev " : ""}`}>{next}</a>
      </div>
      <style jsx>
        {`
          a {
            display: block;
            margin-bottom: -19px;
            line-height: 1;
            overflow: hidden;
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
            height: 61px;
          }
        `}
      </style>
    </>
  );
};

export default NavLink;
