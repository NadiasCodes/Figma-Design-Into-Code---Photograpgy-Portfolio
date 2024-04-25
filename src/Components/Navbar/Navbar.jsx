import React, { useState } from "react";
import MenuIcon from "../../assets/menu-icon.png";
import "./Navbar.css";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="nav-container">
      <h1 className="nav-h1">Logo</h1>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={0} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <img src={MenuIcon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
