import React, { useEffect, useState } from "react";
import axios from "axios";

function usePatch(url, modify, quantity) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    console.log("inside execute");
    setLoading(true);
    axios
      .patch(url, { quantity: quantity }, { withCredentials: true })
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

export default usePatch;
