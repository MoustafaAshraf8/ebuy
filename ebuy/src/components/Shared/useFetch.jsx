import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;
    setLoading(true);
    axios
      .get(url, { withCredentials: true }, { signal: abortController.signal })
      .then((response) => {
        if (response.status == 200) {
          isMounted && setData(response.data);
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
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
