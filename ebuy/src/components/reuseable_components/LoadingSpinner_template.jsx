import React from "react";

function LoadingSpinner_template({ loading, specialHeight }) {
  let navBar_height = specialHeight || "10vh";
  let height = `calc(100vh - ${navBar_height})`; //get it from context api
  if (loading)
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
