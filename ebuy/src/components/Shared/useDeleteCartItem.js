import React, { useEffect, useState } from "react";
import axios from "axios";

function useDeleteCartItem(productid, remove) {
  const url = `http://localhost:8080/client/cart/${productid}`;
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    console.log("inside execute");
    setLoading(true);
    axios
      .delete(url, { withCredentials: true })
      .then((response) => {
        setData(true);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (remove) execute();
  }, [remove]);

  return { data, loading, error };
}

export default useDeleteCartItem;
