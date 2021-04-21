import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { IconButton } from "@material-ui/core";

function footer() {
  return (
    <div className="footer">
      <IconButton color="primary" aria-label="facebook">
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="twitter" color="primary">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="insta" color="primary">
        <InstagramIcon />
      </IconButton>
    </div>
  );
}

export default footer;
