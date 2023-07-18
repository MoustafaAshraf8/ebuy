import React from "react";
import CardData from "./CardData";
//import useGetProduct from "../../Shared/useGetProducts";
import { useState, useEffect } from "react";
//import useGetProducts from "../../Shared/useGetProducts";
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
    price: "500000",
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

const Card = () => {
  const [Product, setProduct] = useState([]);
  //useGetProducts(setProduct);
  return (
    <div className=" d-flex row justify-content-center w-100 m-0 p-0">
      {Products.map((product) => (
        <CardData {...{ product }} key={product.id} />
      ))}
    </div>
  );
};

export default Card;
