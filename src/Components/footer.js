import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { IconButton } from "@material-ui/core";
import QR from "../images/QR.png";

function footer() {
  return (
    <div className="footer">
      <IconButton color="primary" aria-label="facebook">
        <FacebookIcon />
        <span class="social__text"> @IAMEDISPA</span>
      </IconButton>
      <IconButton aria-label="twitter" color="primary">
        <TwitterIcon />
        <span class="social__text"> @IAMEDISPA</span>
      </IconButton>
      <IconButton aria-label="insta" color="primary">
        <InstagramIcon />
        <span class="social__text"> @IAMEDISPA</span>
      </IconButton>
      <div>
        <img className="footer__qr" src={QR} alt="QR" />
      </div>
    </div>
  );
}

export default footer;
