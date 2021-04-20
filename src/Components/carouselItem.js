import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
// import square1 from "../images/square1.jpg";
// import square2 from "../images/square2.jpg";
import "./carouselItem.css";
import Fade from "@material-ui/core/Fade";

function CarouselItem(props) {
  return (
    <div className="carouselItem">
      <div className="carouselItem__item">
        <Avatar size="500" alt="Remy Sharp" src={require(props.currImg)} />
        <h2 className="carouselItem__heading">{props.currHeading}</h2>
      </div>
    </div>
  );
}

export default CarouselItem;
