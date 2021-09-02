import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSuccess = () => {
  const logoStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div className="form-content-right">
      <Link className="close-btn" style={logoStyle} to="/">
        ×
      </Link>
      <h1 className="form-success">We have received your request!</h1>
      <div className="form-img-2" />
    </div>
  );
};

export default FormSuccess;
