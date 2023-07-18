import React from "react";

const Product_image_template = ({ href, anchorStyle, src, imgStyle }) => {
  return (
    <a href={href} style={anchorStyle}>
      <img src={src} className="card-img-top" alt="..." style={imgStyle} />
    </a>
  );
};

export default Product_image_template;
