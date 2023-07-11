import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LoginIcon from "@mui/icons-material/Login";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import BrandLogo from "./components/BrandLogo";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";

const goToCart = () => {
  console.log("hello cart");
};

const NavigationBar = () => {
  return (
    <nav
      className="container-fluid nav justify-content-left navbar navbar-expand-md navbarscroll p-4 m-0"
      data-bs-theme="dark"
      style={{
        border: "solid 3px green",
        backgroundColor: "#474646",
        height: "60px",
      }}
    >
      <div
        className="container-fluid d-flex pe-0"
        style={{ border: "solid 3px red" }}
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
          style={{ border: "solid 3px yellow" }}
        >
          <ul
            className="container-fluid navbar-nav p-0 m-0 d-flex align-items-center"
            style={{ border: "solid 3px black" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                <HomeSharpIcon />
              </a>
            </li>

            <Categories />
            <SearchBar />

            <li className="nav-item">
              <a className="nav-link" href="/shoppingcart">
                <ShoppingCartIcon />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <span className="d-none d-sm-inline">
                  <LoginIcon />
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
