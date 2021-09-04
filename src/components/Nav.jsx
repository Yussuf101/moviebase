import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/FormLogin" className="logo" style={navStyle}>
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
