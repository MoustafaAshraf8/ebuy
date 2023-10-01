import { useState, useEffect } from "react";
import axios from "axios";
function useFetchcartitem() {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;
    setLoading(true);
    axios
      .get(
        "http://localhost:8080/client/cart",
        { withCredentials: true },
        { signal: abortController.signal }
      )
      .then((response) => {
        if (response.status == 200) {
          isMounted && setData(response.data);
        } else if (response.status == 403) {
          console.log("hello");
          window.location.replace("http://localhost:3000/login");
        } else {
          throw new Error(`statusCode: ${response.msg}`);
        }
      })
      .catch((err) => {
        //console.log(err.name);
        if (!err.name == "AbortError") {
          setError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);
  return { data, loading, error };
}

export default useFetchcartitem;
