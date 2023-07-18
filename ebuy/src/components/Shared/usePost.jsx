import { useState, useEffect } from "react";
import axios from "axios";

function usePost(url, postBody, submitValue) {
  console.log("usePost", `submitValue: ${submitValue}`);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    console.log("execute");
    setLoading(true);
    axios
      .post(url, postBody)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log("useEffect-0");
    if (submitValue) execute();
  }, [submitValue]);

  return { data, loading, error };
}

export default usePost;
