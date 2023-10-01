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
      .then(async (response) => {
        const res = JSON.parse(JSON.stringify(response.data));
        let information = {
          registered: true,
          person_id: res[0].person_id,
          person_name: res[0].person_name,
          person_email: res[0].person_email,
          person_phone: res[0].person_phone,
          person_address: res[0].person_address,
          accessToken: res[0].accessToken,
        };
        //   dispatch(
        //     signIn({
        //       registered: true,
        //       person_id: res[0].person_id,
        //       person_name: res[0].person_name,
        //       person_email: res[0].person_email,
        //       person_phone: res[0].person_phone,
        //       person_address: res[0].person_address,
        //       accessToken: res[0].accessToken,
        //     })
        //   );
        console.log(res);
        setData(res);
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
