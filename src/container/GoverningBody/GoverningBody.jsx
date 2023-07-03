import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./GoverningBody.css";

const GoverningBody = () => (
  <div className="GoverningBodyWrapper" id="governingBody">
    <div className="ownerImage">
      <img src={images.owner} />
      <p className="ownerCaption">
        Live your dreams and <br/> spread the love <br/> - let's do this together through <br/>Shanti Nandan Bauddha Welfare Society.<br/>
        <a className="founderLink" href="https://www.facebook.com/ubmaurya" target="_blank" rel="noopener noreferrer">Uday Bhan Maurya</a><br/> Founder &amp; Secretary
      </p>
    </div>

    <div className="GoverningBodyAppWrapperInfo">
      <h1 className="headtext__cormorant_GB">FOUNDER'S MESSAGE</h1>

      <div className="app__GB-content-GB">
        <div className="app__GB-content-GB_quote">
          <p className="p__GB1">
          “Warm Greeting to all”
         “There is a natural law, a Divine law that obliges you and me to relieve the sufferings of the distressed and the destitute. 
         As I am highly influenced by Philosophy of Buddhism, because in my view Buddhism is not a Religion; it is a way of giving 
         dignity to life, an actual path that leads to the alleviation of suffering. The teachings of Buddhism are highly relevant and 
         easily applicable to modern issues in today's society. ”
          </p>
        </div>
        <p className="p__GB2">
        In Buddhism, the primary purpose of life is to end suffering. The Buddha taught that humans suffer because we continually 
        strive after things that do not give lasting happiness. We desperately try to hold on to things - friends, health, material
         things - that do not last, and this causes sorrow. We are living in a society where people�s way of life and income is so 
         much worse than the general standard of living; they struggle to live a normal life and to participate in ordinary economic, 
         social and cultural activities. So our thirst to reduce this human suffering and improve quality of their life has given birth
          to Shanti Nandan Bauddha Welfare Society that is how this society (NGO) came into existence.
        </p>
      </div>

      <div className="app__GB-sign">
      <p>"We make a commitment to respect life and dignity, individuality and diversity, so that every 
      person is treated humanely." - The Declaration of a Global Ethic</p>
      </div>
      <button type="button" className="KnowMoreButton">
           Know more
      </button>
      <button type="button" className="BoardOFMembersButton">
           Board of Members
      </button>
    </div>
  </div>
);

export default GoverningBody;
