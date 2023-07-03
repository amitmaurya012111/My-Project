import React from "react";
import "./ContactUsExtended.css";
import "@fortawesome/fontawesome-free/css/all.css";

const ContactUsExtended = () => (
    <div className="ContactUsExtendedWrapper" id="ContactUsExtended">
        <div className="ContactUsExtendedAppWrapperInfo">
            <div className="officeWrapper">
                <div className="headingWrapper">
                    <h1 className="headtext">Send Message</h1>
                </div>
                <div className="app__GB-content">
                    <div className="app__GB-content_quote">
                        <div className="inputContainer">
                            <label htmlFor="name" className="label-1">
                                My Name:
                            </label>
                            <input type="text" id="name" className="inputField" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="email" className="label-1">
                                Email Address:
                            </label>
                            <input type="email" id="email" className="inputField" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="message" className="label-1">
                                Message:
                            </label>
                            <textarea id="message" className="inputField" rows="4" />
                        </div>
                        <button className="sendButton">Send</button>
                    </div>
                </div>
            </div>

            <div className="officeWrapper">
                <div className="headingWrapper">
                    <h1 className="headtext">Contact Details</h1>
                </div>
                <div className="app__GB-content">
                    <div className="app__GB-content_quote">
                        <p className="p__GB1-ContactUsExended">
                            <span className="label">Address:</span>
                            <br />
                            <span className="value">Village: Gariaon, Post: Gariaon</span>
                            <br />
                            <span className="value">
                                Dist: Jaunpur Uttar Pradesh - 222204
                            </span>
                        </p>
                        <p className="p__GB1-ContactUsExended">
                            <span className="label">Phone:</span>
                            <br />
                            <span className="value">+91-8400238273</span>
                        </p>
                        <p className="p__GB1-ContactUsExended">
                            <span className="label">Email:</span>
                            <br />
                            <span className="value">
                                info@snbws.org, ubmaurya@snbws.org
                            </span>
                        </p>
                        <p className="p__GB1-ContactUsExended">
                            <span className="label">Social:</span>
                            <br />
                            <span className="value">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-facebook-f fa-lg"></i>
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-youtube fa-lg"></i>
                                </a>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-google-plus-g fa-lg"></i>
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footerStrip">
                <div className="footerLinks">
                    <a href="faq.html" >F.A.Q.</a>
                    <span>|</span>
                    <a href="privacy.html">Privacy Policy</a>
                    <span>|</span>
                    <a href="terms.html">Terms & Conditions</a>
                    <span>|</span>
                    <a href="sitemap.html">Sitemap</a>
                    <span>|</span>
                    <a href="http://sanrakshan.snbws.org/" target="_blank">SCM Hospital</a>
                </div>
                <div className="copyright">
                    <p>
                        <span>
                        © {new Date().getFullYear()} Shanti Nandan Bauddha Welfare Society. All rights reserved.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ContactUsExtended;
