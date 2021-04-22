import React, { useEffect } from "react";
import "./mainVideo.css";
import mainVideoURL from "../images/music2.mp4";
import music from "../images/music.mp3";

function MainVideo() {
  const audioElement = new Audio(music);

  // useEffect(() => {
  //   setTimeout(() => {
  //     audioElement.play();
  //   }, 500);
  // }, []);

  return (
    <div className="mainVideo">
      <div className="backgroundVideo">
        <video autoplay="true" loop id="bgvid">
          <source src={mainVideoURL} type="video/mp4" />
          <button id="unmuteButton"></button>
        </video>

        <audio id="audio" autoplay>
          <source src={music} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

// const unmuteButton = document.getElementById("unmuteButton");
// const video = document.getElementById("bgvid");

// unmuteButton.addEventListener("click", () => {
//   video.muted = false;
// });

export default MainVideo;
