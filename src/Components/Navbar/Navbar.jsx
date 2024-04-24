import React, { useState } from "react";
import MenuIcon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="nav-container">
      <h1 className="nav-h1">Logo</h1>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <img src={MenuIcon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
