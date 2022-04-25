import { useEffect, useState } from "react";

const Image = ({ file, text, byteArray }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    if (file && !byteArray) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    } else if (file && byteArray) {
      setImage(`data:image/png;base64,${file.slice(2, file.length - 1)}`);
    }
  }, [file, byteArray]);

  return (
    <div className="my-2  bg-light-purple br-1">
      {file ? (
        <img
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          src={image}
          alt=""
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        ></div>
      )}

      <div className="fs-4 py-2 fw-normal">{text}</div>
    </div>
  );
};

export default Image;
