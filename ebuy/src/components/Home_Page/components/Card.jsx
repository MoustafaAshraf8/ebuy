import React from "react";
import CardData from "./CardData";
import { useState, useEffect } from "react";
import useFetch from "../../Shared/useFetch";
import LoadingSpinner_template from "../../reuseable_components/LoadingSpinner_template";
import Error_template from "../../reuseable_components/Error_template";
// let Products = [
//   {
//     id: 0,
//     name: "Product-0",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "500",
//     rating: "4.5",
//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 1,
//     name: "Product-1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 2,
//     name: "Product-2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 3,
//     name: "Product-3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 4,
//     name: "Product-4",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 5,
//     name: "Product-5",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 6,
//     name: "Product-6",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 7,
//     name: "Product-7",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 0,
//     name: "Product-0",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "500000",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 0,
//     name: "Product-0",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 2,
//     name: "Product-2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 3,
//     name: "Product-3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 4,
//     name: "Product-4",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 5,
//     name: "Product-5",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 6,
//     name: "Product-6",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
//   {
//     id: 7,
//     name: "Product-7",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
//     price: "100",
//     rating: "4.5",

//     imgURL: "./Image/product_placeholder.png",
//   },
// ];

const Card = () => {
  let {
    data: Products,
    loading,
    error,
  } = useFetch("http://localhost:8080/product");

  if (loading) return <LoadingSpinner_template specialHeight="50vh" />;

  if (error || Products == null)
    return <Error_template specificHeight="50vh" />;

  if (Products)
    return (
      <div
        className="container-fluid d-flex row justify-content-center m-0 p-0"
        style={{ border: "0px solid red", minHeight: "50vh" }}
      >
        {Products != null ? (
          Products.map((product) => (
            <CardData {...{ product }} key={product.id} />
          ))
        ) : (
          <div> </div>
        )}
      </div>
    );
};

export default Card;
