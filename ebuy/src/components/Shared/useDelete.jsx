import React, { useEffect, useState } from "react";
import axios from "axios";

function useDelete(url, submit) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    console.log("inside execute");
    setLoading(true);
    axios
      .delete(url, { withCredentials: true })
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
  }, [submit]);

  return { data, loading, error };
}

export default useDelete;
