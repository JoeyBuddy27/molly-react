import React, { useState, useEffect, useContext } from "react";
import "./carousel.css";
import mainVideo from "../images/mainVideo.mp4";
import CarouselItem from "../Components/carouselItem";
// import square1 from "../images/square1.jpg";
// import square2 from "../images/square2.jpg";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import { UserContext } from "../UserContext";
import myData from "../data.json";
import ReactAudioPlayer from "react-audio-player";
import myAudio from "../images/music.mp3";

function Carousel(props) {
  // export context
  const currentContext = useContext(UserContext);

  const secondItem = currentContext.currentItem + 1;
  console.log(secondItem);

  const [checked, setChecked] = useState(false);

  // const [currentNum, setCurrentNum] = useState(-1);

  // Import JSON

  const data = myData;
  //   Different services in arrays
  const headingArray = ["Facials", "Spa Treatment"];
  // const imageArray = [square1, square2];

  console.log(data[0].title);

  const startingURL = "/images/";

  useEffect(() => {
    setTimeout(() => {
      setChecked((prev) => !prev);
      if (
        currentContext.currentItem == 3 ||
        currentContext.currentItem2 == 3 ||
        currentContext.currentItem3 == 3
      ) {
        currentContext.setCurrentItem(0);
        currentContext.setCurrentItem2(1);
        currentContext.setCurrentItem3(2);
      } else {
        currentContext.setCurrentItem(currentContext.currentItem + 1);
        currentContext.setCurrentItem2(currentContext.currentItem2 + 1);
        currentContext.setCurrentItem3(currentContext.currentItem3 + 1);
      }
      // if (currentContext.currentItem2 >= data.length - 1) {
      //   currentContext.setCurrentItem2(1);
      // } else {
      //   currentContext.setCurrentItem2(currentContext.currentItem2 + 1);
      // }
      // if (currentContext.currentItem3 >= data.length - 1) {
      //   currentContext.setCurrentItem3(2);
      // } else {
      //   currentContext.setCurrentItem2(currentContext.currentItem3 + 1);
      // }
    }, 3000);
  }, [checked]);

  return (
    <div className="carousel">
      <h1 className="carousel__title">Services</h1>
      <h3 className="carousel__subtitle">[Tap for info]</h3>
      <div className="carousel__container">
        <div>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            timeout={2500}
          >
            <div
              onClick={() =>
                currentContext.setCurrentContent(currentContext.currentItem)
              }
            >
              <CarouselItem
                currImg={data[currentContext.currentItem].img}
                currHeading={data[currentContext.currentItem].title}
              />
            </div>
          </Zoom>
        </div>

        <div>
          <Zoom
            in={checked}
            timeout={2000}
            style={{ transitionDelay: checked ? "250ms" : "0ms" }}
          >
            <div
              onClick={() =>
                currentContext.setCurrentContent(currentContext.currentItem)
              }
            >
              <CarouselItem
                currImg={data[currentContext.currentItem2].img}
                currHeading={data[currentContext.currentItem2].title}
              />
            </div>
          </Zoom>
        </div>

        <div>
          <Zoom in={checked} timeout={1000}>
            <div
              onClick={() =>
                currentContext.setCurrentContent(currentContext.currentItem)
              }
            >
              <CarouselItem
                currImg={data[currentContext.currentItem3].img}
                currHeading={data[currentContext.currentItem3].title}
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
