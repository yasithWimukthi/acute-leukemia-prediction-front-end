import "./Button.css";

const Button = ({ children, onClick,type }) => {
  return (
    <button className="btn-wrapper " onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
