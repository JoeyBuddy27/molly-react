import React, { useContext } from "react";
import "./Content.css";
import MainVideo from "../Components/mainVideo";
import MainContent from "../Components/mainContent";
import { UserContext } from "../UserContext";
import myData from "../data.json";

// use shared state to determine which state we are in?? (useHooks)

function Content(props) {
  const startingURL = "../images/";
  const data = myData;
  // get state/context
  const currentContext = useContext(UserContext);

  return (
    <div className="content">
      {currentContext.currentContent == 0 && <MainVideo />}
      {currentContext.currentContent == 1 && (
        <MainContent
          title={data[currentContext.currentContent].title}
          text={data[currentContext.currentContent].text}
          img={`${startingURL}${data[currentContext.currentContent].img}`}
        />
      )}
    </div>
  );
}

export default Content;
