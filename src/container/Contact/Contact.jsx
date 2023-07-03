import React from "react";
import { images } from "../../constants";
import "./Contact.css";

const Contact = () => (
  <div className="ContactWrapper" id="contact">
    <div className="ContactAppWrapperInfo">
      <div className="officeContactWrapper">
        <div className="headingContactWrapper">
          <h1 className="ContactHeadtext">REGISTERED OFFICE</h1>
        </div>
        <div className="app__GB-contentContact">
          <div className="app__GB-content_quoteContact">
            <p className="p__GB1-Contact">
              <span className="label-Contact">Address:</span>
              <br />
              <span className="value">Village: Gariaon, Post: Gariaon</span>
              <br />
              <span className="value">Dist: Jaunpur Uttar Pradesh - 222204</span>
            </p>
            <p className="p__GB1-Contact">
              <span className="label-Contact">Phone:</span>
              <br />
              <span className="value">+91-8400238273</span>
            </p>
            <p className="p__GB1-Contact">
              <span className="label-Contact">Email:</span>
              <br />
              <span className="value">info@snbws.org, ubmaurya@snbws.org</span>
            </p>
          </div>
        </div>
      </div>

      <div className="fficeContactWrapper">
        <div className="headingContactWrapper">
          <h1 className="ContactHeadtext">BRANCH OFFICE</h1>
        </div>
        <div className="app__GB-contentContact">
          <div className="app__GB-content_quoteContact">
            <p className="p__GB1-Contact">
              <span className="label-Contact">Address:</span>
              <br />
              <span className="value">Bauddha Vihar, Kharka Colony Husainabad</span>
              <br />
              <span className="value">Dist: Jaunpur Uttar Pradesh - 222002</span>
            </p>
            <p className="p__GB1-Contact">
              <span className="label-Contact">Phone:</span>
              <br />
              <span className="value">+91-5454220308</span>
            </p>
            <p className="p__GB1-Contact">
              <span className="label-Contact">Email:</span>
              <br />
              <span className="value">info@snbws.org, ashadevi@snbws.org</span>
            </p>
          </div>
        </div>
      </div>

      <div className="MembershipQuote">
      “DON'T WAIT FOR OTHER PEOPLE TO BE LOVING, GIVING, COMPASSIONATE, GRATEFUL, FORGIVING, GENEROUS, OR FRIENDLY... LEAD THE WAY!”
        <button type="button" className="MembershipButton">
          Membership
        </button>
      </div>
    </div>

    <div className="MapImage">
      <a
        className="jaunpurLink"
        href="http://en.wikipedia.org/wiki/Gariaon,_Jaunpur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={images.jaunpur} />
      </a>
    </div>
  </div>
);

export default Contact;
