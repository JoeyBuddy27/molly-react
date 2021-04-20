import React from "react";
import "./header.css";
import logo from "../images/logo.png";

function header() {
  return (
    <div className="header">
      <div className="header__overlay">
        <img class="header__logo" src={logo} />
      </div>
    </div>
  );
}

export default header;
