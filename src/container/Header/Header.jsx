import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper-Header section__padding-Header" id="home">
    <div className="app__wrapper_info-Header">
      <SubHeading title="OUR VISION" />
      <SubHeading title="SUPERIORITY OF HUMAN LIFE" />
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Shanti Nandan Bauddha Welfare Society strongly believes in the philosophy of Gautam Buddha, because Buddhism is not a Religion, it is a way of giving dignity to life, an actual path that leads to the alleviation of suffering.
      The purpose of formation of Shanti Nandan Bauddha Welfare Society is to execute the philosophy of Gautam Buddha into reality, to reduce human suffering and improve quality of life through relevant education, innovative healthcare and market-focused livelihood program
      </p>
      <button type="button" className="custom__button">
        Learn More About us
      </button>
      <div className="app__wrapper_info_founder_message">
      <button type="button" className="custom__button">
        Founders Message
      </button>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.people} alt="header img" />
    </div>
  </div>
);

export default Header;
