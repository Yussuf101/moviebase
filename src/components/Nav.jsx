import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  const logoStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link className="logo" style={logoStyle} to="/FormLogin">
          <li>LOG IN</li>
        </Link>
        <h1>MOVIE BASE</h1>
        <Link style={navStyle} to="/Form">
          <li>SIGN UP</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
