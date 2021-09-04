import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="add-on-logos">
          <div className="logo1">MOVIE BASE</div>
          <div className="logo2"></div>
          <div className="logo3"></div>
        </div>

        <div className="add-on-info">
          {" "}
          BUNDLE WITH ANY MOVIEBASE PLAN & SAVE Get MOVIEBASE, Disney+, and
          ESPN+.
        </div>
        <div className="bunlde">
          <div className="bundle-button"> get the disney bundle</div>
          <div className="bundle-terms">terms & conditions </div>
        </div>
        <div className="hero">
          <div className="slogun">ALL THE MOVIES YOU LOVE IN ONE PLACE</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
