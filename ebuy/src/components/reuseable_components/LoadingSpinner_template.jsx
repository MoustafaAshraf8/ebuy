import React from "react";

function LoadingSpinner_template({ specialHeight }) {
  let navBar_height = "10vh";
  let height = specialHeight || `calc(100vh - ${navBar_height})`; //get it from context api

  return (
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
      style={{
        border: "0px solid red",
        height: height,
      }}
    >
      <div
        class="spinner-grow"
        style={{
          width: "20vh",
          height: "20vh",
          color: "#474646",
        }}
        role="status"
      ></div>
    </div>
  );
}

export default LoadingSpinner_template;
