import React from "react";
import useFetch from "../Shared/useFetch";
import Button_template from "../reuseable_components/Button_template";
import CartItem from "./components/CartItem";

let Products = [
  {
    id: 0,
    name: "Product-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500",
    rating: "4.5",
    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 1,
    name: "Product-1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 2,
    name: "Product-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 3,
    name: "Product-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 4,
    name: "Product-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 5,
    name: "Product-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 6,
    name: "Product-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 7,
    name: "Product-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 0,
    name: "Product-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 0,
    name: "Product-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 2,
    name: "Product-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 3,
    name: "Product-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 4,
    name: "Product-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 5,
    name: "Product-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 6,
    name: "Product-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
  {
    id: 7,
    name: "Product-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "./Image/product_placeholder.png",
  },
];

let checkoutFn = () => {
  console.log("succeed checkout");
};

const CartPage = () => {
  let productPageStyle = {
    minHeight: "calc(100vh - 10vh)", //10vh : min-height of navbar
    border: "1px solid red",
  };
  return (
    <div
      className="container-fluid d-md-flex flex-column justify-content-center align-items-center p-0 p-sm-5 pt-4 m-0"
      style={productPageStyle}
    >
      <div>
        <h1>Cart content</h1>
      </div>
      {Products.map((product) => (
        <CartItem {...product} key={product.id} />
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
