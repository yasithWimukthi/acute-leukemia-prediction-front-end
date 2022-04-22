const Header = ({ children }) => {
  return (
    <div
      className="pb-2 px-2 pt-lg-2 pt-4 m-header"
      style={{ color: "#23272F" }}
    >
      {children}
    </div>
  );
};

export default Header;
