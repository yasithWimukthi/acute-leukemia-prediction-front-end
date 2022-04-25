import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="full-screen">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  );
};

export default LoadingSpinner;
