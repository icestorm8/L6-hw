import { createContext, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
  const [name, setName] = useState("");

  const globalVal = {
    name,
    setName,
  };

  return (
    <AppContext.Provider value={globalVal}>
      {props.children}
    </AppContext.Provider>
  );
}
