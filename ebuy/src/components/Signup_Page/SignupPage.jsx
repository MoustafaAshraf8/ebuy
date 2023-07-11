import React, { useState } from "react";
import Input_template from "../reuseable_components/Input_template";
import OR from "../reuseable_components/OR";
import Button_template from "../reuseable_components/Button_template";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const SignupPage = () => {
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  let [Submit, setSubmit] = useState(false);

  //   const getIsFormValid = () => {
  //     return Email.match(regexEmail) && Password.value.match(regexPassword);
  //   };

  let emailChanged = (e) => {
    setEmail(e.target.value);
    console.log(Email);
    //  if (Email.match(regexEmail)) {
    //    console.log(Email + "email accepted");
    //  } else {
    //    console.log(Email + "wrong email schema");
    //  }
  };
  let passwordChanged = (e) => {
    setPassword({ ...Password, value: e.target.value });
    console.log(Password.value);
    //  if (Password.value.match(regexPassword) && Password.value.length >= 8) {
    //    console.log(Password.value + "  strong password");
    //  } else {
    //    console.log(Password.value + "  weak password");
    //  }
  };

  let submitHandle = (e) => {
    e.preventDefault();
    console.log(`email: ${Email} ==> password: ${Password.value}`);
    setSubmit(!Submit);
  };

  //useLogin(Email, Password.value, Submit);
  //setSubmit(false);
  //let validated = Email && Password.value;

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100%",
        position: "fixed",
        backgroundImage: "url('./Images/storm.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card d-flex-column justify-content-center p-3 col-12 col-sm-10 col-md-6"
        style={{ border: "solid 3px green", borderRadius: "10px" }}
      >
        <div className="ms-2 mb-2" style={{ textAlign: "start" }}>
          Sign in
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
            value={Password.value}
            onChange={passwordChanged}
            type="password"
            placeholder="password"
          />

          {/* remember me + forgot password */}

          <div className="RememberForgot d-flex justify-content-between mb-2">
            <div class="rememberMe form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
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
        <Button_template text="sign-up" href="/sign-up" />
      </div>
    </div>
  );
};

export default SignupPage;
