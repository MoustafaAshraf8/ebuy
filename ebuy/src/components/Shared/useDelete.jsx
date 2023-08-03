import React, { useEffect } from "react";
import axios from "axios";

function useDelete(url, submit) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    //  axios
    //    .post(url, postBody, { withCredentials: true })
    //    .then((response) => {
    //      setData(response.data);
    //      console.log(response.data);
    //    })
    //    .catch((err) => {
    //      setError(err);
    //    })
    //    .finally(() => {
    //      setLoading(false);
    //    });
    setLoading(true);
    axios
      .delete(url)
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
    if (submit) execute();
  }, [url]);

  return { data, loading, error };
}

export default useDelete;
