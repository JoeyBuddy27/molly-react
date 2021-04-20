import React from "react";
import "./mainVideo.css";
import mainVideoURL from "../images/mainVideo.mp4";

function mainVideo() {
  return (
    <div className="mainVideo">
      <div className="backgroundVideo">
        <video autoplay="true" muted loop id="bgvid">
          <source src={mainVideoURL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default mainVideo;
