import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button";
import "./Message.css";

const Message = ({ show, setShow ,title, message}) => {
  return show ? (
    <div className="message border shadow bg-light">
      <button
        className="messageBtn "
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <AiOutlineClose size={20} />
      </button>
      <h4 className="ps-3 pt-2 fs-4">{title}</h4>
      <p className="ps-3 pt-3 fs-5">{message}</p>
      <Button
        styleClass="btnCloseMessage"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Close
      </Button>
    </div>
  ) : null;
};

export default Message;
