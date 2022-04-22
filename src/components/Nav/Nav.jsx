import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Button from "../Button/Button";
import FloatToggle from "../FloatToggle/FloatToggle";

import ImageUpload from "../ImageUpload/ImageUpload";
import { useFile } from "../Providers/FileProvider";
import { useData } from "../Providers/DataProvider";



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file] = useFile();
  const [data,setData]  = useData();

  

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image",file);


    fetch(
      "http://ec2-54-169-148-84.ap-southeast-1.compute.amazonaws.com:8081/detection"
    ,{
      
      method:'POST',
      body:formData
    })
      .then((res) => res.json())
      .then((data) => setData(data)).catch(err=>console.log(err));
  };

  return (
    <>
      <div className="d-none d-lg-flex justify-content-center align-items-center flex-column h-100 gap-3">
        <ImageUpload>Browse Input Image</ImageUpload>
        <form onSubmit={submithandler}>
          <Button
            type={"submit"}
          >
            Feature Extraction
          </Button>
        </form>
        <Button>Classification</Button>
        <Button>Reset</Button>

        <Offcanvas show={isOpen} onHide={handleClose}>
          <Offcanvas.Header closeButton className="ms-auto"></Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              style={{ minHeight: "80vh" }}
            >
              <Button>Browse Input Image</Button>
              <Button>Feature Extraction</Button>
              <Button>Classification</Button>
              <Button>Reset</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <FloatToggle onClick={handleOpen} />
    </>
  );
};

export default Nav;
