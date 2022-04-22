const Image = ({ src, text }) => {
  return (
    <div className="my-2  bg-light-purple br-1">
      <img
        style={{
          width: "100%",
          height: "12rem",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem"

        }}
        src={src}
        alt=""
      />
      <div className="fs-4 py-2 fw-normal">{text}</div>
    </div>
  );
};

export default Image;
