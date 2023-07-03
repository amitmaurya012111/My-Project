import React, { useState } from "react";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [showAnnualReportOptions, setShowAnnualReportOptions] = useState(false);
  const [showOrganizationalProfileOptions, setShowOrganizationalProfileOptions] = useState(false);

  const handleOptionClick = (event) => {
    event.preventDefault();
    const pdfPath = event.target.dataset.pdf;
    if (pdfPath) {
      window.open(pdfPath, "_blank");
    }
  };

  const handleAnnualReportMouseEnter = () => {
    setShowAnnualReportOptions(true);
  };

  const handleAnnualReportMouseLeave = () => {
    setShowAnnualReportOptions(false);
  };

  const handleOrganizationalProfileMouseEnter = () => {
    setShowOrganizationalProfileOptions(true);
  };

  const handleOrganizationalProfileMouseLeave = () => {
    setShowOrganizationalProfileOptions(false);
  };

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#programs">Programs</a>
        </li>
        <li className="p__opensans">
          <a href="#governingBody">Governing Body</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">Media & Gallery</a>
        </li>
        <li className="p__opensans">
          <a>Downloads</a>
          <div className="download-options">
            <ul>
              <li
                className={`download-option ${showAnnualReportOptions ? "show-sub-options" : ""}`}
                onMouseEnter={handleAnnualReportMouseEnter}
                onMouseLeave={handleAnnualReportMouseLeave}
              >
                <a href="#">Annual Report</a>
                {showAnnualReportOptions && (
                  <ul className="sub-options right">
                    <li>
                      <a
                        href="#"
                        onClick={handleOptionClick}
                        data-pdf="https://snbws.org/downloads/Annual%20Report%202014.pdf"
                      >
                        Annual Report 2014
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleOptionClick}
                        data-pdf="https://snbws.org/downloads/Annual%20Report%202015.pdf"
                      >
                        Annual Report 2015
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="download-option">
                <a
                  href="#"
                  onClick={handleOptionClick}
                  data-pdf="https://snbws.org/downloads/Membership%20Form.pdf"
                >
                  Membership Form
                </a>
              </li>
              <li className="download-option">
                <a
                  href="#"
                  onClick={handleOptionClick}
                  data-pdf="https://snbws.org/downloads/Donation%20Form.pdf"
                >
                  Donation Form
                </a>
              </li>
              <li
                className={`download-option ${showOrganizationalProfileOptions ? "show-sub-options" : ""}`}
                onMouseEnter={handleOrganizationalProfileMouseEnter}
                onMouseLeave={handleOrganizationalProfileMouseLeave}
              >
                <a href="#">Organizational Profile</a>
                {showOrganizationalProfileOptions && (
                  <ul className="sub-options right">
                    <li>
                      <a
                        href="#"
                        onClick={handleOptionClick}
                        data-pdf="https://snbws.org/downloads/SNBWS%20Profile.pdf"
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleOptionClick}
                        data-pdf="https://snbws.org/downloads/SNBWS%20PROFILE%20HINDI%20REV01.pdf"
                      >
                        Hindi
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
