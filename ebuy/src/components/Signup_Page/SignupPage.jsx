import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import Input_template from "../reuseable_components/Input_template";
import OR from "../reuseable_components/OR";
import Button_template from "../reuseable_components/Button_template";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import usePost from "../Shared/usePost";
import axios from "axios";

const SignupPage = () => {
  let [Name, setName] = useState("");
  let [Phone, setPhone] = useState("");
  let [Address, setAddress] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [Submit, setSubmit] = useState(false);
  let submitValue = false;

  let regexEmail = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,6}$/;
  let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  let isFormValid = () => {
    return Email.match(regexEmail) && Password.match(regexPassword);
  };

  let nameChanged = (e) => {
    setName(e.target.value);
    console.log(Name);
  };
  let phoneChanged = (e) => {
    setPhone(e.target.value);
    console.log(Phone);
  };
  let addressChanged = (e) => {
    setAddress(e.target.value);
    console.log(Address);
  };
  let emailChanged = (e) => {
    setEmail(e.target.value);
    console.log(Email);
    if (!Email.match(regexEmail)) setSubmit(false);
  };
  let passwordChanged = (e) => {
    setPassword(e.target.value);
    console.log(Password);
    if (!Password.match(regexPassword)) setSubmit(false);
  };

  let submitHandle = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.log("not valid");
      submitValue = false;
      setSubmit(submitValue);
    } else {
      submitValue = true;
      setSubmit(submitValue);

      console.log(`email: ${Email} ==> password: ${Password}`, submitValue);
    }
  };

  if (!isFormValid() && submitValue == true) {
    submitValue = false;
    setSubmit(submitValue);
  }
  //console.log("before usePost: ", submitValue);

  usePost(
    "http://localhost:8080/client/signUp",
    {
      name: Name,
      email: Email,
      password: "testpassword",
      phone: Phone,
      address: Address,
    },
    Submit
  );

  //_____________________________________________
  //   useEffect(() => {
  //     console.log("inside useEffect", Submit);
  //     if (Submit) {
  //       console.log("inside useEffect if condition", Submit);
  //       axios.post("http://localhost:8080/client/signUp", {
  //         name: Name,
  //         email: Email,
  //         password: "testpassword",
  //         phone: Phone,
  //         address: Address,
  //       });
  //     }
  //   });

  //_____________________________________________

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
        style={{
          //border: "solid 3px green",
          borderRadius: "10px",
        }}
      >
        <div className="ms-2 mb-2" style={{ textAlign: "center" }}>
          <h1>Sign up</h1>
        </div>
        <form onSubmit={submitHandle}>
          <Input_template
            label="Name"
            value={Name}
            onChange={nameChanged}
            type="text"
            placeholder=""
          />

          <Input_template
            label="Phone"
            value={Phone}
            onChange={phoneChanged}
            type="text"
            placeholder=""
          />

          <Input_template
            label="Address"
            value={Address}
            onChange={addressChanged}
            type="text"
            placeholder=""
          />

          <Input_template
            label="Email"
            value={Email}
            onChange={emailChanged}
            type="email"
            placeholder=""
          />
          <Input_template
            label="Password"
            value={Password}
            onChange={passwordChanged}
            type="password"
            placeholder=""
          />
          {/* register btn */}
          <Button_template text="register" />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
