import React from "react";
import { images } from "../../constants";
import "./AboveNavbar.css";

const AboveNavbar = () => (
  <div className="background-color-Above-Navbar">
  <div className="app__aboutus app__bg flex__center section__padding">
  <div className="shantiNandanLogo">
      <img src={images.ShantiNandanLogo} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Shanti Nandan Baudha Welfare Society</h1>
        <h2 className="qote">~~Giving Dignity to Life~~</h2>
      </div>
  </div>
  </div>
  </div>
);

export default AboveNavbar;
