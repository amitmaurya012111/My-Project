import React from "react";

import {
  AboutUs,
  GoverningBody,
  Gallery,
  Header,
  Programs,
  AboveNavbar,
  Contact,
  ContactUsExtended,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <AboveNavbar/>
    <Navbar />
    <Header />
    <AboutUs />
    <Programs />
    <GoverningBody />
    <Gallery />
    <Contact/>
    <ContactUsExtended/>
  </div>
);

export default App;
