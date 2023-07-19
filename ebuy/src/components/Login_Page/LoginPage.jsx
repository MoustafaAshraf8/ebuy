import React, { useState } from "react";
import Input_template from "../reuseable_components/Input_template";
import OR from "../reuseable_components/OR";
import Button_template from "../reuseable_components/Button_template";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import usePost from "../Shared/usePost";

const LoginPage = () => {
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [Submit, setSubmit] = useState(false);

  let emailChanged = (e) => {
    setEmail(e.target.value);
    setSubmit(false);
    console.log(Email);
  };
  let passwordChanged = (e) => {
    setPassword(e.target.value);
    setSubmit(false);
    console.log(Password);
  };

  let submitHandle = (e) => {
    e.preventDefault();
    console.log(`email: ${Email} ==> password: ${Password}`);
    setSubmit(true);
  };

  usePost(
    "http://localhost:8080/client/signIn",
    {
      email: Email,
      password: "testpassword",
    },
    Submit
  );

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
        position: "fixed",
        backgroundColor: "#adaaaa",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card d-flex-column justify-content-center p-3 col-12 col-sm-10 col-md-6"
        style={{ border: "0px solid green", borderRadius: "10px" }}
      >
        <div className="ms-2 mb-2" style={{ textAlign: "center" }}>
          <h1>Sign in</h1>
        </div>
        <form onSubmit={submitHandle}>
          <Input_template
            label="email"
            value={Email}
            onChange={emailChanged}
            type="email"
            placeholder="test email"
          />
          <Input_template
            label="password"
            value={Password}
            onChange={passwordChanged}
            type="password"
            placeholder="password"
          />

          {/* remember me + forgot password */}

          <div className="RememberForgot d-flex justify-content-between mb-2">
            <div className="rememberMe form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div className="forgotPassword">
              <a className="text-reset" href="#">
                Forgot password
              </a>
            </div>
          </div>
          {/* login btn */}
          <Button_template text="login" />
        </form>
        {/* or */}
        <OR />
        {/* signup btn */}
        <Button_template text="sign-up" href="/signup" />
      </div>
    </div>
  );
};

export default LoginPage;
