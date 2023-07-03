import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div id="about">
    <div >
    <h1 className="WhoWeAreHeading">
      Who we are
    </h1>
    <p className="WhoWeAreQuote">
      TO CREATE SELF-EMPLOYMENT IN THE RURAL POPULATION BY MULTI-DIMENSIONAL APPROACHES
    </p>
    <button type="button" className="WhoWeAreKnowMoreButton">
      Know More
    </button>
    </div>
    <div>
    <h1 className="WhereWeWorkHeading">
      Where we work
    </h1>
    <p className="WhereWeWorkQuote">
    RURAL SCHOOL INFRASTRUCTURE
    </p>
    <p className="WhereWeWorkQuote">
    RURAL HEALTH INFRASTRUCTURE
    </p>
    <p className="WhereWeWorkQuote">
    SOCIO-ECONOMIC STATUS
    </p>
    <button type="button" className="WhereWeWorkKnowMoreButton">
      Know More
    </button>
    </div>
    <div className="DonationQuote">
    IN ORDER TO MEET OUR MISSION AND PROVIDE SERVICES IN SOCIO-ECONOMIC BACKWARD SECTIONS OF URBAN & RURAL COMMUNITY,
     WE RELY ON THE GENEROSITY OF INDIVIDUALS AND BUSINESSES FOR SUPPORT.
     <button type="button" className="DonateUsButton">
      Donate Us
    </button>
    </div>
  </div>
);

export default AboutUs;
