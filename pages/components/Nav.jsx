import { useState } from "react";
import { DigiLink } from "./DigiLink";
import { NavContext } from "./NavContext";



export const Nav = () => {
  var [pages, setPages] = useState({ active: 'home', pages: ['projects', 'blog', 'playlists'] });
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <NavContext.Provider value={[pages, setPages, disabled, setDisabled]}>
        <div className="m-1 row p-3 nav">
          <div className="display-6">
          </div>
          <div className="align-self-end">
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



// https://w3.ibm.com/#/

// -- home page

// https://w3.ibm.com/#/people/039078897

// -- corporate page

// https://ibm.webex.com/webappng/sites/ibm/dashboard/pmr/james.kurkela1

// -- cross meeting 

// https://w3.ibm.com/youandibm/us/topics
// https://w3.ibm.com/#/apps/96e42fa3-5f81-4a97-86a2-978f48484158

// -- benefits

// mount sapo site 





