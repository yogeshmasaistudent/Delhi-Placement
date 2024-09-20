import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyCompany</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a
            href="#services"
            onMouseEnter={toggleMegaMenu}
            onMouseLeave={toggleMegaMenu}
          >
            Services
            <i className="arrow-down"></i>
            {isMegaMenuOpen && (
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h3>Category 1</h3>
                  <ul>
                    <li>
                      <a href="#sub1">Subcategory</a>
                    </li>
                    <li>
                      <a href="#sub2">Subcategory</a>
                    </li>
                    <li>
                      <a href="#sub3">Subcategory</a>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Category 2</h3>
                  <ul>
                    <li>
                      <a href="#sub4">Subcategory</a>
                    </li>
                    <li>
                      <a href="#sub5">Subcategory</a>
                    </li>
                    <li>
                      <a href="#sub6">Subcategory</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
