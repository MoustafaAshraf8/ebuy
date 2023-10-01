import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LoginIcon from "@mui/icons-material/Login";

import BrandLogo from "./components/BrandLogo";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";

const goToCart = () => {
  console.log("hello cart");
};

const iconFontStyle = {
  largeIcon: { fontSize: 30 },
};

const NavigationBar = () => {
  const user = useSelector((state) => {
    console.log("!!!!!!!!!!!!!!!!!!!!");
    console.log(state.user.value);
    //setX("x");
    console.log("!!!!!!!!!!!!!!!!!!!!");
    return state.user.value;
  });

  return (
    <nav
      className="container-fluid nav justify-content-left navbar navbar-expand-md navbarscroll p-3 m-0"
      data-bs-theme="dark"
      style={{
        border: "solid 0px green",
        backgroundColor: "#474646",
        maxHeight: "10vh",
      }}
    >
      <div
        className="container-fluid d-flex"
        style={{
          border: "solid 0px red",
          height: "100%",
          backgroundColor: "#474646",
        }}
      >
        {/* website logo */}
        <BrandLogo />
        {/* burger button with small screens */}
        <button
          className="navbar-toggler ml-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* container for all links and search-bar */}
        <div
          className="collapse navbar-collapse justify-content-left"
          id="navbarSupportedContent"
          style={{ border: "solid 0px yellow" }}
        >
          <ul
            className="container-fluid navbar-nav p-0 m-0 d-flex align-items-center"
            style={{ border: "solid 0px black" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                <HomeSharpIcon style={iconFontStyle.largeIcon} />
              </a>
            </li>

            <Categories />
            <SearchBar {...iconFontStyle.largeIcon} />

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <ShoppingCartIcon style={iconFontStyle.largeIcon} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <span className="d-inline">
                  <LoginIcon style={iconFontStyle.largeIcon} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
