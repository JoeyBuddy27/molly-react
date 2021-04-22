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

  // let currentItem = currentContext.currentItem;
  // console.log(currentItem);
  // let currentItem2 = currentContext.currentItem + 1;
  // console.log(currentItem2);
  // let currentItem3 = currentContext.currentItem2 + 1;
  // console.log(currentItem3);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);

  const [checked, setChecked] = useState(false);

  // const [currentNum, setCurrentNum] = useState(-1);

  // Import JSON

  const data = myData;
  //   Different services in arrays
  const headingArray = ["Facials", "Spa Treatment"];
  // const imageArray = [square1, square2];

  const startingURL = "/images/";

  useEffect(() => {
    setTimeout(() => {
      setChecked((prev) => !prev);
      if (first >= data.length - 1) {
        setFirst(0);
      } else {
        setFirst(first + 1);
      }
      if (second >= data.length - 1) {
        setSecond(0);
      } else {
        setSecond(second + 1);
      }
      if (third >= data.length - 1) {
        setThird(0);
      } else {
        setThird(third + 1);
      }
      // }
      // }
      // if (currentContext.currentItem2 >= data.length - 1) {
      //   currentContext.setCurrentItem2(1);
      // } else {
      //   currentContext.setCurrentItem2((currentContext.currentItem2 += 1));
      // }
      // if (currentContext.currentItem3 >= data.length - 1) {
      //   currentContext.setCurrentItem3(2);
      // } else {
      //   currentContext.setCurrentItem2((currentContext.currentItem3 += 1));
      // }
    }, 2500);
  }, [checked, setChecked]);

  return (
    <div className="carousel">
      <h1 className="carousel__title">Services</h1>
      <h3 className="carousel__subtitle">[Tap for info]</h3>
      <div className="carousel__container">
        <div>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            timeout={1000}
          >
            <div onClick={() => currentContext.setCurrentContent(first)}>
              <CarouselItem
                currImg={data[first].img}
                currHeading={data[first].title}
              />
            </div>
          </Zoom>
        </div>

        <div>
          <Zoom
            in={checked}
            timeout={750}
            style={{ transitionDelay: checked ? "250ms" : "0ms" }}
          >
            <div onClick={() => currentContext.setCurrentContent(second)}>
              <CarouselItem
                currImg={data[second].img}
                currHeading={data[second].title}
              />
            </div>
          </Zoom>
        </div>

        <div>
          <Zoom in={checked} timeout={500}>
            <div onClick={() => currentContext.setCurrentContent(third)}>
              <CarouselItem
                currImg={data[third].img}
                currHeading={data[third].title}
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
