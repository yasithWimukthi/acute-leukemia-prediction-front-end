import { createContext, useContext, useState } from "react";

const FileContext = createContext();
const SetFileContext = createContext();

export const useFile = () => {
  return [useContext(FileContext),useContext(SetFileContext)];
};



const FileProvider = ({ children }) => {
  const [file, setFile] = useState();

  return (
    <FileContext.Provider value={file}>
      <SetFileContext.Provider value={setFile}>
        {children}
      </SetFileContext.Provider>
    </FileContext.Provider>
  );
};

export default FileProvider;
