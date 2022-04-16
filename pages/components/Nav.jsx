import { useState } from "react";
import { DigiLink } from "./DigiLink";
import { NavContext } from "./NavContext";

export const Nav = () => {
  var [pages, setPages] = useState({ active: 'home', pages: ['projects', 'blog', 'playlists'] });
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <NavContext.Provider value={[pages, setPages, disabled, setDisabled]}>
        <div className="red col-sm-2 row p-3 nav">
          <div>
            <DigiLink page={pages.active}></DigiLink>
          </div>
          <div className="align-self-end row overflow-hidden">
            {pages.pages.map((page, i) => (
              <DigiLink
                key={i}
                page={page}
                onPress={() => pages.active}
              ></DigiLink>
            ))}
          </div>
        </div>
      </NavContext.Provider>
    </>
  );
};
