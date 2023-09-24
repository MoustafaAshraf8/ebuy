import React from "react";

const Product_image_template = ({
  href,
  anchorStyle,
  src,
  onError,
  imgStyle,
}) => {
  return (
    <a href={href} style={anchorStyle}>
      <img
        //   src="./Image/product_placeholder.png"
        src={src}
        onError={onError}
        className="card-img-top"
        alt="..."
        style={imgStyle}
      />
    </a>
  );
};

export default Product_image_template;
