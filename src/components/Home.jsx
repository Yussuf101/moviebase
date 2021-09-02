import React, { useState } from "react";
import "./Home.css";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="img-container" />
        <div className="container"></div>
      </div>
    </>
  );
};

export default Home;
