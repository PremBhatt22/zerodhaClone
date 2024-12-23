import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/ReactToastify.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup+login/Signup.jsx";
import Login from "./landing_page/signup+login/Login.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import InvalidRoute from "./landing_page/InvalidRoute.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <HomePage />
  // </StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="*" element={<InvalidRoute />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
