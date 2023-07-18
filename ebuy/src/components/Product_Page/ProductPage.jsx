import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductImage from "./components/ProductImage";
import ProductData from "./components/ProductData";
import { minWidth } from "@mui/system";
import Button_2 from "../reuseable_components/Button";
import Button_template from "../reuseable_components/Button_template";

const ProductPage = () => {
  let product = {
    id: 0,
    name: "Product-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum ea explicabo excepturi. Rerum esse obcaecati beatae sequi voluptatem perferendis quam temporibus natus amet suscipit. Quasi quaerat ipsam dicta libero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum ea explicabo excepturi. Rerum esse obcaecati beatae sequi voluptatem perferendis quam temporibus natus amet suscipit. Quasi quaerat ipsam dicta libero",
    price: "500",
    rating: "4.5",
    imgURL: "./Image/product_placeholder.png",
  };

  let productPageStyle = {
    minHeight: "calc(100vh - 10vh)", //10vh : min-height of navbar
    border: "1px solid red",
  };
  let productPageContentStyle = {
    minHeight: "50vh",
    border: "1px solid green",
  };

  let clicked = () => {
    console.log("add to cart");
  };

  return (
    <div
      className="container-fluid d-md-flex flex-row justify-content-between align-items-start p-5 pt-4 m-0"
      style={productPageStyle}
    >
      <div
        className="container-fluid d-flex flex-row justify-content-center align-items-start p-2 m-1"
        style={productPageContentStyle}
      >
        <ProductImage src={product.imgURL} />
      </div>

      <div
        className="container-fluid d-flex flex-column justify-content-start align-items-start p-2 m-1"
        style={productPageContentStyle}
      >
        <ProductData {...product} key={product.id} />
        <div className="container-fluid p-0">
          <Button_template
            onClick={clicked}
            text={<AddShoppingCartIcon />}
            style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
