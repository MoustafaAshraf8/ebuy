import React from "react";

const ProductPage = () => {
  let productPageStyle = {
    border: "3px solid green",
    minHeight: "calc(100vh - 60px)", //60px : min-height of navbar
  };
  return (
    <div
      className="container-fluid d-flex flex-column align-items-start pt-4 m-0"
      style={productPageStyle}
    ></div>
  );
};

export default ProductPage;
