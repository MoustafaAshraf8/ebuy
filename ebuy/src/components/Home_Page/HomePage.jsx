import React from "react";
import "./HomePage.css";
import SaleImage from "./components/SaleImage";
import Card from "./components/Card";
import { useSelector } from "react-redux";
const HomePage = () => {
  let homePageStyle = {
    border: "0px solid green",
    minHeight: "calc(100vh - 10vh)", //60px : height of navbar
  };

  const user = useSelector((state) => {
    console.log("-----------------");
    return state.user.value;
  });

  return (
    <div
      className="container-fluid d-flex flex-column align-items-start pt-4 m-0"
      style={homePageStyle}
    >
      <div>{user.person_name}</div>
      <SaleImage />
      <Card />
    </div>
  );
};

export default HomePage;
