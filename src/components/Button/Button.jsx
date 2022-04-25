import "./Button.css";

const Button = ({ children, onClick,type, styleClass }) => {
  return (
    <button className={`btn-wrapper ${styleClass}`}  onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
