import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductImage from "./components/ProductImage";
import ProductData from "./components/ProductData";
import Button_template from "../reuseable_components/Button_template";
import useFetch from "../Shared/useFetch";

const ProductPage = () => {
  let product_id = window.location.href.split("/").at(-1);

  let {
    data: product,
    loading,
    error,
  } = useFetch(`http://localhost:8080/product/${product_id}`);

  let productPageStyle = {
    minHeight: "calc(100vh - 10vh)", //10vh : height of navbar
    border: "0px solid red",
  };
  let productPageContentStyle = {
    minHeight: "50vh",
    border: "0px solid green",
  };

  let clicked = () => {
    console.log("add to cart");
  };

  if (loading)
    return (
      <div
        class="container-fluid d-flex justify-content-center align-items-center"
        style={{ border: "0px solid red", height: "35vh" }}
      >
        <div
          class="spinner-grow"
          style={{
            width: "20vh",
            height: "20vh",
            color: "#474646",
          }}
          role="status"
        ></div>
      </div>
    );

  if (error)
    return (
      <div
        class="container-fluid d-flex justify-content-center align-items-center p-4 col-12"
        style={{ border: "1px solid red" }}
      >
        <img
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          src="./Image/error_image.png"
          style={{
            // width: "20%",
            height: "80%",
            // color: "#474646",
            border: "0px solid red",
          }}
          alt=""
        />
      </div>
    );

  if (product != null)
    return (
      <div
        className="container-fluid d-md-flex flex-row justify-content-between align-items-start p-5 pt-4 m-0"
        style={productPageStyle}
      >
        <div
          className="container-fluid d-flex flex-row justify-content-center align-items-start p-2 m-1"
          style={productPageContentStyle}
        >
          <ProductImage src="\Image\product_placeholder.png" />
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

  return <div></div>;
};

export default ProductPage;
