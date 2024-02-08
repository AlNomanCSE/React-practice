import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.modules.css";
const Navbar = () => {
  return (
    <div className="navigationbar">
      <div className="logo">
        <Link to="/">#CARLIFE</Link>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
