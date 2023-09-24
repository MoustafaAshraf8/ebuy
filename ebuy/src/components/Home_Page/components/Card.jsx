import React from "react";
import CardData from "./CardData";
import { useState, useEffect } from "react";
import useFetch from "../../Shared/useFetch";
import LoadingSpinner_template from "../../reuseable_components/LoadingSpinner_template";
import Error_template from "../../reuseable_components/Error_template";

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
        className="container-fluid d-flex row justify-content-center m-0 p-4"
        style={{ border: "0px solid red", minHeight: "50vh" }}
      >
        {Products != null ? (
          Products.map((product) => (
            <CardData {...{ product }} key={product.product_productid} />
          ))
        ) : (
          <div> </div>
        )}
      </div>
    );
};

export default Card;
