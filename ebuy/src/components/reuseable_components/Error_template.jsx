import React from "react";

function Error_template({ specificHeight }) {
  let navBar_height = "10vh";
  let height = specificHeight || `calc(100vh - ${navBar_height})`; //get it from context api

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center col-12"
      style={{ border: "1px solid red", height: height }}
    >
      <img
        className="col-8 col-sm-6 col-md-4 col-lg-2 w-lg-75"
        src="\Image\error_image.png"
        style={{
          // width: "20%",
          height: "50%",
          // color: "#474646",
          border: "0px solid red",
        }}
        alt=""
      />
    </div>
  );
}

export default Error_template;
