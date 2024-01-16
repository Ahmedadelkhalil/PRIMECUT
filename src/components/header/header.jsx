import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// redux
import { useSelector } from "react-redux";

const Header = () => {
  const [shownav, setShownav] = useState(false);
  const addedProductsNum = useSelector((state) => state.cart.cartItems.length);
  return (
    <header className="header-container py-3 px-4 row">
      <div className="col-8 d-flex align-items-center">
        {/* =========================================== */}
        <div className="logo text-uppercase">
          <NavLink to="/">
            <div className="d-flex">
              <span className="bg-dark-green main-color-white prime">
                prime
              </span>
              <div className="d-flex flex-column b-f main-color-green">
                <p>burgers</p>
                <p className="d-flex align-items-end f-sec">
                  <span>and</span> fries
                </p>
              </div>
            </div>
            <div className="bg-dark-green main-color-white cut">cut</div>
          </NavLink>
        </div>
        {/* =========================================== */}
        <nav className="d-none d-md-block">
          <ul className="list-unstyled d-flex text-uppercase">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">menu</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">faqs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
        {/* =========================================== */}
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <div className="shop-sec d-flex align-items-center main-color-green">
          <button className="cartPage-btn">
            <NavLink to="/cart">
              <span>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
              <span>—</span>
              <span>{addedProductsNum}</span>
            </NavLink>
          </button>
        </div>

        <div className="user-icon">
          <button className="userRegister-btn">
            <NavLink to="/signIn">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </NavLink>
          </button>
        </div>

        <div className="d-block d-md-none">
          <span onClick={() => setShownav(true)}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </span>
        </div>
      </div>
      {/* =========================================== */}

      <div
        className={`mobile-nav-links ${
          shownav ? "mobile-nav-links-show" : ""
        } `}
      >
        <div
          className="close-sec p-3 text-uppercase"
          onClick={() => setShownav(false)}
        >
          <FontAwesomeIcon icon={faX} />
          <span>close</span>
        </div>

        <nav className="main-color-green">
          <ul className="list-unstyled d-flex align-items-center flex-column gap-4 text-uppercase ">
            <li onClick={() => setShownav(false)}>
              <NavLink to="/">home</NavLink>
            </li>
            <li onClick={() => setShownav(false)}>
              <NavLink to="/menu">menu</NavLink>
            </li>
            <li onClick={() => setShownav(false)}>
              <NavLink to="/faqs">faqs</NavLink>
            </li>
            <li onClick={() => setShownav(false)}>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
