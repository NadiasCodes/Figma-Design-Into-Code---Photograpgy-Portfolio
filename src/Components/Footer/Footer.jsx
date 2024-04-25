import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h1>Logo</h1>
        <ul className="social-footer-box">
          <li>
            <img src={FacebookIcon} className=" social-icon social-footer " />{" "}
          </li>
          <li>
            {" "}
            <img src={InstagramIcon} className="social-icon social-footer " />
          </li>
          <li>
            {" "}
            <img src={LinkedinIcon} className=" social-icon social-footer " />
          </li>
        </ul>
        <p>© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
