import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import square1 from "../images/1.jpg";
import square2 from "../images/2.jpg";
import "./carouselItem.css";
import Fade from "@material-ui/core/Fade";

function CarouselItem(props) {
  return (
    <div className="carouselItem">
      <div className="carouselItem__item">
        <Avatar alt="Remy Sharp" src={props.currImg} />
        <h2 className="carouselItem__heading">{props.currHeading}</h2>
      </div>
    </div>
  );
}

export default CarouselItem;
