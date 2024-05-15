import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logoMobile from "../assets/jeremypromsy-logoMobile-JérémyPromsy.png";
import logoDesktop from "../assets/jeremypromsy-logoDesktop-JérémyPromsy.png";


function Navbar() {
return (
    <nav className="header">
          <div className="logoNav">
            <NavLink to="/">
              <img 
                className="logo-img-Mobile logoHeader" 
                src={logoMobile}
                alt="logo Jérémy Promsy" />
              <img 
                className="logo-img-Desktop logoHeader" 
                src={logoDesktop} 
                alt="logo Jérémy Promsy" />
            </NavLink>
          </div>
          <div className="contactNav nav-links">
              <NavLink to="/contact">Contact</NavLink>
          </div>
      </nav>
  );
}

export default Navbar;