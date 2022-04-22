import {  useRef } from "react";
import Button from "../Button/Button";
import { useFile } from "../Providers/FileProvider";

const ImageUpload = ({ children }) => {
  const uploaderRef = useRef();

 
  const [,setFile] = useFile();

  const clickhandler = () => {
    uploaderRef.current.click();
  };

  const changehandler = (event) => {
    if(event.target.files && event.target.files.length === 1){
        setFile(event.target.files[0]);
    }
   
  };


 

  return (
    <>
      <input
        onChange={changehandler}
        ref={uploaderRef}
        type="file"
        accept=".jpg, .jpeg,.png"
        style={{ display: "none" }}
      />
      <Button onClick={clickhandler}>{children}</Button>
    </>
  );
};

export default ImageUpload;
