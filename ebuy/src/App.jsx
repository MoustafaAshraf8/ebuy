import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import HomePage from "./components/Home_Page/HomePage";
import LoginPage from "./components/Login_Page/LoginPage";
import SignupPage from "./components/Signup_Page/SignupPage";
import ProductPage from "./components/Product_Page/ProductPage";
import CartPage from "./components/Cart_Page/Cart";
function App() {
  return (
    <div
      className="App"
      style={{ border: "0px solid purple", height: "100vh" }}
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/shoppingcart" element={<CartPage />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
