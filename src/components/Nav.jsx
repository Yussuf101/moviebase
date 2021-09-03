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
        <Link className="logo" style={navStyle} to="/FormLogin">
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
