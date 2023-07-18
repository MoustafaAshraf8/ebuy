import React from "react";

const SaleImage = () => {
  let imgStyle = {
    display: "block",
    height: "35vh",
    width: "75vw",
    borderRadius: "10px",
  };
  return (
    <div className="container-fluid d-flex justify-content-center">
      <img src="./Image/sale_image.png" alt="" style={imgStyle} />
    </div>
  );
};

export default SaleImage;
