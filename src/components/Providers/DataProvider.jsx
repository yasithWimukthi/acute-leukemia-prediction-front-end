import { createContext, useContext, useState } from "react";

const DataContext = createContext();
const SetDataContext = createContext();

export const useData = () => {
  return [useContext(DataContext), useContext(SetDataContext)];
};

const DataProvider = ({ children }) => {
  const [value, setValue] = useState();

  return (
    <DataContext.Provider value={value}>
      <SetDataContext.Provider value={setValue}>
        {children}
      </SetDataContext.Provider>
    </DataContext.Provider>
  );
};

export default DataProvider;
