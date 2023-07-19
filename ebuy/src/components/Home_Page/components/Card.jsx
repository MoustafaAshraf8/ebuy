import React from "react";
import CardData from "./CardData";
import { useState, useEffect } from "react";
import useFetch from "../../Shared/useFetch";
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
  console.log(Products);

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
