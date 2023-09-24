import React from "react";
import Button_template from "../../reuseable_components/Button_template";
const ProductData = (props) => {
  const starStyle = { color: "orange", fontSize: 30 };
  const elementClassName =
    "container-fluid mb-2 d-flex justify-content-start align-items-center";
  const titleClassName = "me-3";

  return (
    <>
      <div className={elementClassName}>
        <h1>{props.product_name}</h1>
      </div>
      <div className={elementClassName}>
        <h4 className={titleClassName}>Price: </h4>
        <h5>
          {props.product_price} <sup>egp</sup>
        </h5>
      </div>
      <div className={elementClassName}>
        <h4 className={titleClassName}>discount: </h4>
        <h5>{props.product_discount}%</h5>
      </div>
      <div className={elementClassName}>
        <h4 className={titleClassName}>category: </h4>
        <h5>{props.product_category}</h5>
      </div>
      {/* <div className={elementClassName}>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star checked" style={starStyle}></span>
        <span className="fa fa-star" style={starStyle}></span>
        <span className="fa fa-star-half-o" style={starStyle}></span>
      </div> */}
      {/* <div className={elementClassName} style={{ textAlign: "left" }}>
        <h4 className={titleClassName}>Description: </h4>
        <h5>{props.product_description}</h5>
      </div> */}
    </>
  );
};

export default ProductData;
