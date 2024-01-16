import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer-container p-4 row">
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <NavLink to="/">
          <h4>primecut</h4>
        </NavLink>
      </div>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <h4>menu</h4>
        <nav>
          <ul>
            <li>
              <NavLink to="/faqs">faqs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/menu">menu</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-5 mt-sm-0">
        <h4>get in touch</h4>
        <ul>
          <li className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="G-I-T">ahmed@gmail.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span className="G-I-T">+201025521486</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="G-I-T">Elmahalla-ElKubra</span>
          </li>
        </ul>
      </div>
      <div className="col-6 col-sm-6 col-md-3 col-lg-2 mt-5 mt-sm-5 mt-md-0">
        <h4>working hours</h4>
        <ul>
          <li>tue - sat: 11:00 - 23:00</li>
          <li>sun: 12:00 - 22:00</li>
          <li>mon: closed</li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5 mt-sm-5 mt-md-5 mt-lg-0">
        <h4>newsletter</h4>
        <div className="newsletter d-flex align-items-center">
          <input type="email" placeholder="Enter your e-mail address:" />
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
        <h4 className="pp-sec">privacy policy</h4>
        <p>&copy; ahmed adel {currentDate}. all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
