import { createContext } from "react";
import uhg from "../API/uhg.json";
const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
  const Data = uhg;
  return (
    <div>
      <AppContext.Provider value={Data}>{children}</AppContext.Provider>
    </div>
  );
};

export default AppContext;
