import React from "react";

import { SubHeading} from "../../components";

import { images} from "../../constants";
import "./Programs.css";

const Programs = () => (
<div>
  <div className="ProjectsAndProgramsTitle" id="programs">
    <div className="app_Info_Programs">
      <SubHeading title="PROJECTS & PROGRAMS" />
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Education, healthcare, micro-finance and women empowerment are some of the areas the Shanti Nandan Bauddha Welfare Society is 
      mainly focusing upon.  With an aim to reduce the gap between haves and have-nots, the Shanti Nandan Bauddha Welfare Society is 
      working to provide all the basic resources to the poor and needy that are necessary to live, survive and grow gracefully in a 
      society.
      </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.programs} alt="header img" />
    </div>
  </div>
  <div className="Sankalp_Sanrakshan_Srijan">
      <div className="Sankalp">
        <div>
          <h1>Sankalp</h1>
        </div>
        <div>
          To grow interest of the student in education by providing an excellent service in this field and to build a progressive society.
          One day all children will get an excellent education. To stop the interruption in studies due to poverty and other 
          circumstantial hindrance, by encouraging students and providing them scholarship
        </div>
        <button type="button" className="SankalpKnowMore">
           Know more
        </button>
      </div>
      <div className="Sanrakshan">
        <div>
          <h1>Sanrakshan</h1>
        </div>
        <div>
        Sanrakshan (संरक्षण) is one such special initiative of Shanti Nandan Bauddha Welfare Society to provide healthcare services to 
        meet the immediate health care needs of the marginalized community in remote rural areas and slums through Medicare center and
         standalone camps
        </div>
        <button type="button" className="SanrakshanKnowMore">
           Know more
        </button>
      </div>
      <div className="Srijan">
        <div>
          <h1>Srijan</h1>
        </div>
        <div>
        It aims to increase the self-reliance and autonomy of girls & women by enhancing their productivity and enabling them to take 
        up income generation activities. It provides training for skill up gradation to poor and socio-economically backward people
        </div>
        <button type="button" className="SrijanKnowMore">
           Know more
        </button>
      </div>
  </div>
  <div className="Remove-Extra-Space">
    <h1></h1>
  </div>
</div>
);

export default Programs;
