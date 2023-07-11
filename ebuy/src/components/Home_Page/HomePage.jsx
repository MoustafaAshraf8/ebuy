import React from "react";
import "./HomePage.css";
import SaleImage from "./components/SaleImage";
import Card from "./components/Card";
const HomePage = () => {
  let homePageStyle = {
    border: "3px solid green",
    minHeight: "calc(100vh - 60px)", //60px : height of navbar
  };
  return (
    <div
      className="container-fluid d-flex flex-column align-items-start pt-4 m-0"
      style={homePageStyle}
    >
      <SaleImage />
      {/* <Card /> */}
    </div>
  );
};

export default HomePage;
