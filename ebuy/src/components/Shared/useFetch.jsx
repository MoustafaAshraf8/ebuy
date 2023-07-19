import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    axios
      .get(url, { signal: abortController.signal })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.name);
        if (!err.name == "AbortError") {
          setError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
