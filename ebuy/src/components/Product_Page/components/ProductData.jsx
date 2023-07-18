import React from "react";
import Button_template from "../../reuseable_components/Button_template";
const ProductData = (props) => {
  let starStyle = { color: "orange", fontSize: 30 };
  let elementClassName = "mb-2";
  return (
    <>
      <div className={elementClassName}>
        <h1>{props.name}</h1>
      </div>
      <div className={elementClassName}>
        <h3>
          Price: {props.price}
          <sup>egp</sup>
        </h3>
      </div>
      <div className={elementClassName}>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star" style={starStyle}></span>
        <span className="fa fa-star-half-o" style={starStyle}></span>
      </div>
      <div className={elementClassName} style={{ textAlign: "left" }}>
        {props.description}
      </div>
    </>
  );
};

export default ProductData;
