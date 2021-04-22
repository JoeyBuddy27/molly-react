import React from "react";
import "./mainContent.css";
import QR from "../images/QR.png";

function mainContent(props) {
  return (
    <div className="mainContent">
      <div className="mainContent__container">
        <div className="mainContent__left">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="contact__container">
            <div className="contact__left">
              <img src={QR} alt="" />
            </div>
            <div className="contact__right">
              <h1>GET IN TOUCH</h1>
              <br />
              <p>P: 07828 716 123</p>
              <br />
              <p>E: joedigitalmedia@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mainContent__right">
          <img
            className="mainContent__image"
            src={props.img}
            alt={props.title}
          />
        </div>
      </div>
    </div>
  );
}

export default mainContent;
