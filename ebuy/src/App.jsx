import logo from "./logo.svg";
import "./App.css";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import HomePage from "./components/Home_Page/HomePage";
import LoginPage from "./components/Login_Page/LoginPage";
import SignupPage from "./components/Signup_Page/SignupPage";
import ProductPage from "./components/Product_Page/ProductPage";
import CartPage from "./components/Cart_Page/Cart";
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div
        className="App"
        style={{ border: "0px solid purple", height: "100vh" }}
      >
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
