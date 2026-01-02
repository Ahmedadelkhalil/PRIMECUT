import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { useSelector } from "react-redux";
// Nav Links
import navLinks from "../../assets/links/navLinks";

const Header = () => {
  const [shownav, setShownav] = useState(false);
  const addedProductsNum = useSelector((state) => state.cart.cartItems.length);
  return (
    <header className="header-container py-3 px-4 row">
      <div className="col-8 d-flex align-items-center">
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
        <nav className="d-none d-md-block">
          <ul className="list-unstyled d-flex text-uppercase">
            {navLinks.map((link, indx) => {
              return (
                <li key={indx}>
                  <NavLink to={link.pageLink}>{link.pageName}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <div className="shop-sec main-color-green">
          <button className="cartPage-btn">
            <NavLink to="/cart" className=" d-flex align-items-center">
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
      <div
        className={`mobile-nav-links ${
          shownav ? "mobile-nav-links-show" : "mobile-nav-links-close"
        } d-block d-md-none`}
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
            {navLinks.map((link, indx) => {
              return (
                <li onClick={() => setShownav(false)} key={indx}>
                  <NavLink to={link.pageLink}>{link.pageName}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
