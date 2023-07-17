import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const CardData = ({ product }) => {
  let imgStyle = {
    width: "100%",
    height: "100%",
  };
  let productPath = `/product/${product.id}`;
  return (
    <div
      className="card border-0 col-12 col-sm-6 col-md-3 p-3 m-0"
      style={{ height: "50vh" }}
    >
      <a href={productPath} style={{ height: "70%" }}>
        <img
          src="./Image/product_placeholder.png"
          //src={Product.imgURL}
          className="card-img-top"
          alt="..."
          style={imgStyle}
        />
      </a>
      <div className="card-body" style={{ height: "15%" }}>
        <p className="card-text">{product.name}</p>
      </div>
      <div
        className="d-block d-sm-flex justify-content-between p-2 align-items-center"
        style={{ height: "15%" }}
      >
        <div>
          <div className="align-items-start">Price: {product.price}$</div>
        </div>
        <div>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span className="fa fa-star" style={{ color: "orange" }}></span>
          <span
            className="fa fa-star-half-o"
            style={{ color: "orange" }}
          ></span>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
        >
          <span className="d-inline">
            <AddShoppingCartIcon />
          </span>
        </button>
      </div>
      {/* <div>{Product.description}</div> */}
    </div>
  );
};

export default CardData;
