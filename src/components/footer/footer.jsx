import "./footer.css";
import { Link, NavLink } from "react-router-dom";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// FOOTER LINKS
import {
  siteLinks,
  getInTouch,
  workingHours,
} from "../../assets/links/footerLinks";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer-container px-4 py-5 row">
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <NavLink to="/">
          <h3>PRIMECUT</h3>
        </NavLink>
      </div>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <h4>site links</h4>
        <nav>
          <ul>
            {siteLinks.map((link, indx) => {
              return (
                <li key={indx}>
                  <NavLink to={link.page_Link}>{link.page_Name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-5 mt-sm-0">
        <h4>get in touch</h4>
        <ul>
          {getInTouch.map((info, indx) => {
            return (
              <li className="d-flex align-items-center" key={indx}>
                <FontAwesomeIcon icon={info.contact_Icon} />
                <span className="G-I-T">{info.contact_Info}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-5 mt-sm-5 mt-md-0">
        <h4>working hours</h4>
        <ul>
          {workingHours.map((time, indx) => {
            return <li key={indx}>{time.working_Hours_Info}</li>;
          })}
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mt-5 mt-sm-5 mt-md-5 mt-lg-0">
        <h4>newsletter</h4>
        <div className="newsletter d-flex align-items-center">
          <input type="email" placeholder="Enter your e-mail address:" />
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
        <h4 className="pp-sec">privacy policy</h4>
        <small>
          &copy;{" "}
          <Link to={`https://github.com/Ahmedadelkhalil`} target="_blank">
            <span className="footer-copyright-author-link">Ahmed Adel</span>
          </Link>{" "}
          {currentDate} All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
