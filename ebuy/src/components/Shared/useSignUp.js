import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/user";

function useSignUp(postBody, Submit) {
  const url = "http://localhost:8080/client/signUp";
  console.log("-------------useSignUp------------------");
  console.log(Submit);
  const dispatch = useDispatch();

  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function execute() {
    console.log("^^^^^^^^^^^^^^^^^^^^");
    setLoading(true);
    axios
      .post(url, postBody, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        dispatch(signIn(response.data));
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

export default useSignUp;
