import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Button from "../Button/Button";
import FloatToggle from "../FloatToggle/FloatToggle";

import ImageUpload from "../ImageUpload/ImageUpload";
import { useFile } from "../Providers/FileProvider";
import { useData } from "../Providers/DataProvider";
import Message from "../Message/Message";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useFile();
  const [currentData, setData] = useData();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const submithandler = (event) => {
    event.preventDefault();
    setIsOpen(false);
    if (!file) {
      setIsError(true);
      setMessage("Please Select a Valid Image!");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();

    formData.append("image", file);

    fetch(
      "http://ec2-54-169-148-84.ap-southeast-1.compute.amazonaws.com:8081/detection",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if ("Probability of AML" in data) {
          setData({ isValid: true, payload: data, isResultShow: false });
        } else {
          setData({ isValid: false, payload: {}, isResultShow: false });
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setData({ isValid: false, payload: {}, isResultShow: false });
        setIsLoading(false);
      });

    setIsOpen(false);
  };

  const resetHandler = () => {
    setData({ isValid: false, payload: {}, isResultShow: false });
    setIsOpen(false);

    setFile(undefined);
  };

  const classificationHandler = () => {
    if (currentData.payload["Color Masked Image"]) {
      setData({ ...currentData, isResultShow: true });
      setIsOpen(false);
    } else {
      setIsError(true);
      setMessage("Please Select an Image and Extract Features To Classify !");
      setIsOpen(false);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {
        <Message
          title={"Error"}
          message={message}
          show={isError}
          setShow={setIsError}
        />
      }
      <div className="d-none d-xl-flex justify-content-center align-items-center flex-column h-100 gap-3">
        <ImageUpload onClick={handleClose}>Browse Input Image</ImageUpload>
        <form onSubmit={submithandler}>
          <Button type={"submit"}>Feature Extraction</Button>
        </form>
        <Button onClick={classificationHandler}>Classification</Button>
        <Button onClick={resetHandler}>Reset</Button>

        <Offcanvas show={isOpen} onHide={handleClose}>
          <Offcanvas.Header closeButton className="ms-auto"></Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              style={{ minHeight: "80vh" }}
            >
              <ImageUpload onClick={handleClose}>
                Browse Input Image
              </ImageUpload>
              <form onSubmit={submithandler}>
                <Button type={"submit"}>Feature Extraction</Button>
              </form>
              <Button onClick={classificationHandler}>Classification</Button>
              <Button onClick={resetHandler}>Reset</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <FloatToggle onClick={handleOpen} />
    </>
  );
};

export default Nav;
