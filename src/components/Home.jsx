import React, { useState } from "react";
import "./Home.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const buttonStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="img-container" />
        <div className="info">
          <h2 className="banner-top-sub">try up to one month free</h2>
          <h1 className="banner-title">movie base</h1>
          <h2 className="banner-bottom-sub">
            Watch thousands of Movies and Shows
          </h2>
          <h2 className="bottom-sub-sub">
            HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
          </h2>
          <button className="signup">
            <Link to="/Form" style={buttonStyle}>
              <p>REGISTER YOUR FREE ACCOUNT</p>
            </Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
