import React from "react";
import Product_image_template from "../../reuseable_components/Product_image_template";

const ProductImage = ({ src }) => {
  let imgStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Product_image_template
      href="#"
      anchorStyle={{ height: "50%", width: "50%" }}
      src={src}
      imgStyle={imgStyle}
    />
  );
};

export default ProductImage;
