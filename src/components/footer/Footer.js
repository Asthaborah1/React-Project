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
                    <div><img src="" alt=""></img></div>
                    <div className="astha1"><p className = "">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                </div>

                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p>
                            <FaMapMarkerAlt /> &nbsp; Address : xyz.
                        </p>
                        <p>
                            <FaFax /> &nbsp; Fax: +910000000000
                        </p>
                        <p>
                            <FaEnvelope /> &nbsp; Email: pranay123@gmail.com
                        </p>
                        <p>
                            <FaGlobe /> &nbsp; Website: www.xyz.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;