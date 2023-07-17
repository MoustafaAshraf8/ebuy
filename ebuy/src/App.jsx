import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import HomePage from "./components/Home_Page/HomePage";
import LoginPage from "./components/Login_Page/LoginPage";
import SignupPage from "./components/Signup_Page/SignupPage";
import ProductPage from "./components/Product_Page/ProductPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <HomePage />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
