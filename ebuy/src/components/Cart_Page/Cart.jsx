import React from "react";
import useFetch from "../Shared/useFetch";
import Button_template from "../reuseable_components/Button_template";
import CartItem from "./components/CartItem";
import LoadingSpinner_template from "../reuseable_components/LoadingSpinner_template";
import Error_template from "../reuseable_components/Error_template";
import useFetchCartItem from "../Shared/useFetchCartItem";

let checkoutFn = () => {
  console.log("succeed checkout");
};

const CartPage = () => {
  let productPageStyle = {
    minHeight: "calc(100vh - 10vh)", //10vh : min-height of navbar
    border: "1px solid red",
  };

  let { data: Products, loading, error } = useFetchCartItem();
  console.log(Products);

  if (loading) return <LoadingSpinner_template />;

  if (error || Products == null) return <Error_template />;

  if (Products)
    return (
      <div
        className="container-fluid d-md-flex flex-column justify-content-center align-items-center p-0 p-sm-5 pt-4 m-0"
        style={productPageStyle}
      >
        <div>
          <h1>Cart content</h1>
        </div>
        {Products.map((product) => (
          <CartItem {...product} key={product.product_productid} />
        ))}
        <Button_template
          text="checkout"
          style={{ backgroundColor: "green" }}
          onClick={checkoutFn}
        />
      </div>
    );
};

export default CartPage;
