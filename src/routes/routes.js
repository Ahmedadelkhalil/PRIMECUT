import React, { useEffect } from "react";
// Import Layout
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// Import Pages
import Home from "../pages/home/home.jsx";
import Menu from "../pages/menu/menu.jsx";
import Faqs from "../pages/faqs/faqs.jsx";
import Contact from "../pages/contact/contact.jsx";
import ErrorPage from "../pages/error/errorPage.jsx";
import Cart from "../pages/cart/cart.jsx";
import Payment from "../pages/cart/payment/payment.jsx";
import Checkout from "../pages/cart/checkout/checkout.jsx";
import SignIn from "../pages/registeration/sign_in/signIn.jsx";
import Register from "../pages/registeration/register/register.jsx";
import ForgetPassword from "../pages/Forget Password/forgetPassword.jsx";
import ProductDetails from "../pages/product Details/productDetails.jsx";

// Import React Router Dom Components
import { Routes, Route, useLocation } from "react-router-dom";

const RoutesPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/productDetails/:name" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesPage;
