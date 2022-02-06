import React from "react";
import compose from "../utils/gtheme";

export const GovContext = React.createContext(compose);

export function GovProvider({ children }) {
  return <GovContext.Provider value={compose}>{children}</GovContext.Provider>;
}
