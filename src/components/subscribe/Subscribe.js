import React from 'react'
import "./Subscribe.css"
import {TiSocialGooglePlus} from "react-icons/ti";
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
// import {instagram }from ".../assets/instagram.jpg/";
// import {facebook}from "../assets/facebook.png/"

const Subscribe = () => {
    return (
       <section id="subscribe">
        <div className = "container subscribe">
            <h2>Subscribe Now!</h2>
            <form>
                <div className = "form-control">
                    <input type = "text" placeholder = "Enter your Email..."/>
                    <button>Subscribe</button>
                </div>
            </form>
            <div className = "social-icons">
            <div class="social-icons">
                {/* <a href="#"><img src={facebook} alt="home" /></a>
                 <a href="#"><img src={instagram} alt="home" /></a>
                <a href="#"><img src={instagram} alt="home" /></a>
                <a href="#"><img src={instagram} alt="home" /></a>
                <a href="#"><img src={instagram} alt="home" /></a>
                <a href="#"><img src={instagram} alt="home" /></a> */} 
            </div>
            </div>
        </div>
       </section>
    )
}

export default Subscribe;