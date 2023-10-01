import React, { useEffect, useState } from "react";
import axios from "axios";

function usePatchCartItem(productid, modify, quantity) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const url = `http://localhost:8080/client/cart/${productid}`;
  const reqBody = {
    quantity: quantity.number,
  };

  function execute() {
    console.log("inside execute");
    setLoading(true);
    axios
      .patch(url, reqBody, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (modify) execute();
  }, [quantity]);

  return { data, loading, error };
}

export default usePatchCartItem;
