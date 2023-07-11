import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const CardData = ({ Product }) => {
  //console.log("a7a");
  //let productPath = "product/" + Product.id;

  //   category
  // :
  // "Fruit"
  // description
  // :
  // "Fresh"
  // name
  // :
  // "Apple"
  // price
  // :
  // 10
  // productid
  // :
  // 1
  // quantity
  // :
  // 100
  // rating
  // :
  // 4.5
  let productPath = `/product/${Product.productid}`;
  return (
    <div className="card border-0 col-12 col-sm-6 col-md-3 p-3 m-0">
      <a href={productPath}>
        <img
          src="https://placebeard.it/640x360"
          //src={Product.imgURL}
          className="card-img-top"
          alt="..."
        />
      </a>
      <div className="card-body">
        <p className="card-text">{Product.name}</p>
      </div>
      <div className="d-block d-sm-flex justify-content-between p-0">
        <div>
          <div className="align-items-start">Price: {Product.price}$</div>
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
