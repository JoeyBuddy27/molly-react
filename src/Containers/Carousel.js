import React, { useState, useEffect, useContext } from "react";
import "./carousel.css";
import mainVideo from "../images/mainVideo.mp4";
import CarouselItem from "../Components/carouselItem";
// import square1 from "../images/square1.jpg";
// import square2 from "../images/square2.jpg";
import Fade from "@material-ui/core/Fade";
import { UserContext } from "../UserContext";
import myData from "../data.json";

function Carousel(props) {
  // export context
  const currentContext = useContext(UserContext);

  const [checked, setChecked] = useState(false);

  // const [currentNum, setCurrentNum] = useState(-1);

  // Import JSON

  const data = myData;
  //   Different services in arrays
  const headingArray = ["Facials", "Spa Treatment"];
  // const imageArray = [square1, square2];

  console.log(data[0].title);

  useEffect(() => {
    setTimeout(() => {
      setChecked((prev) => !prev);
      if (currentContext.currentItem >= data.length - 1) {
        currentContext.setCurrentItem(0);
      } else {
        currentContext.setCurrentItem(currentContext.currentItem + 1);
      }
    }, 2000);
  }, [checked]);

  return (
    <div className="carousel">
      <h1 className="carousel__title">Services</h1>
      <h3 className="carousel__subtitle">[Tap for info]</h3>
      <Fade in={checked} timeout={1000}>
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
      </Fade>
    </div>
  );
}

export default Carousel;
