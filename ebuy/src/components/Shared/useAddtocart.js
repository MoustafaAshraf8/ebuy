import { useState, useEffect } from "react";
import axios from "axios";

function useAddtocart(postBody, Submit) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    setLoading(true);
    axios
      .post("http://localhost:8080/client/cart", postBody, {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data);
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
    if (Submit) execute();
  }, [Submit]);

  return { data, loading, error };
}

export default useAddtocart;
