import React from "react";
import Product_image_template from "../../reuseable_components/Product_image_template";
import Button_template from "../../reuseable_components/Button_template";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const CardData = ({ product }) => {
  let imgStyle = {
    width: "100%",
    height: "100%",
  };
  let productPath = `/product/${product.id}`;
  let addToCart = () => {
    console.log("added to cart from homepage");
  };
  return (
    <div
      className="card border-0 col-12 col-sm-6 col-md-4 col-lg-3 p-3 m-0"
      style={{ height: "50vh" }}
    >
      <Product_image_template
        href={productPath}
        anchorStyle={{ height: "60%", width: "100%" }}
        src={product.imgURL}
        imgStyle={imgStyle}
      />
      <div className="card-body" style={{ height: "15%" }}>
        <p className="card-text">{product.name}</p>
      </div>
      <div
        className="d-block d-sm-flex justify-content-between p-2 align-items-center"
        style={{ height: "25%" }}
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
        {/* <button
          className="btn btn-primary"
          type="button"
          style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
        >
          <span className="d-inline">
            <AddShoppingCartIcon />
          </span>
        </button> */}

        <Button_template
          text={<AddShoppingCartIcon />}
          style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
          onClick={addToCart}
        />
      </div>
      {/* <div>{Product.description}</div> */}
    </div>
  );
};

export default CardData;
