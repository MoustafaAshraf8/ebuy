import React, { useState } from "react";
import Input_template from "../reuseable_components/Input_template";
import Button_template from "../reuseable_components/Button_template";
import useSignUp from "../Shared/useSignUp";
import LoadingSpinner_template from "../reuseable_components/LoadingSpinner_template";
import { Navigate } from "react-router-dom";
import Error_template from "../reuseable_components/Error_template";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/user";
import useSignIn from "../Shared/useSignIn";

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
    return (
      Email.match(regexEmail) &&
      (Password.match(regexPassword) || Password == "password")
    );
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
    setSubmit(false);
  };
  let passwordChanged = (e) => {
    setPassword(e.target.value);
    console.log(Password);
    setSubmit(false);
  };

  let submitHandle = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.log("not valid");
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

  let { data, loading, error } = useSignIn(
    {
      name: Name,
      email: Email,
      password: "password",
      phone: Phone,
      address: Address,
    },
    Submit
  );
  const dispatch = useDispatch();

  if (loading) return <LoadingSpinner_template />;
  if (data) {
    console.log("&*&*&*&*&*&*&**");
    console.log(data[0]);
    console.log("&*&*&*&*&*&*&**");
    dispatch(
      signIn({
        registered: true,
        person_id: data[0].person_id,
        person_name: data[0].person_name,
        person_email: data[0].person_email,
        person_phone: data[0].person_phone,
        person_address: data[0].person_address,
        accessToken: data[0].accessToken,
      })
    );
    window.location.replace("http://localhost:3000/");
  }
  if (error) return <Error_template />;

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
