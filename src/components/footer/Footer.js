import React from 'react';
import "./Footer.css";
import {
    FaMapMarkerAlt, FaFax, FaEnvelope, FaGlobe,
} from "react-icons/fa"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer">
                <div>
                    <div><img src="" alt="pranaylodu"></img></div>
                    <div className="astha1"><p className = "tatti">Pranay lodu we support u with 0 80tude , humne pal pose ke bada kia hai uska i mean usko galat mat socho , jaise we support him waise support us 4ever. Every1 pls support r porny isstar . I 9 u r phul of 80tud. Thta's ol I want 2 sy!</p></div>
                </div>

                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p>
                            <FaMapMarkerAlt /> &nbsp; Address : pranay ka potty house.
                        </p>
                        <p>
                            <FaFax /> &nbsp; Fax: +916969696969
                        </p>
                        <p>
                            <FaEnvelope /> &nbsp; Email: pranaylodutatti80tude@gmail.com
                        </p>
                        <p>
                            <FaGlobe /> &nbsp; Website: www.tattipadu.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;