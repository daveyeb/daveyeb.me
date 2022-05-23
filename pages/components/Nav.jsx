import { useState } from "react";
import { DigitalLink } from "./DigitalLink";
import { NavContext } from "./NavContext";

export const Nav = () => {
  const [meta, updateMeta] = useState({active: "playlists"});
  const [links, setLinks] = useState([]);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <NavContext.Provider value={[links, setLinks, meta, updateMeta, disabled, setDisabled]}>
        <div className=" nav col-2 col">
          <div className="align-self-end p-3">
            <DigitalLink index={0}>home</DigitalLink>
            <DigitalLink index={1}>blog</DigitalLink>
            <DigitalLink index={2}>projects</DigitalLink>
          </div>
        </div>
      </NavContext.Provider>
    </>
  );
};
