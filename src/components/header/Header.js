import React from 'react'
import "./Header.css"
import Button from "../UI/button/Button"
import "../UI/button/Button.css"
import communication from "../assets/home2.png"
import { BsMouse } from "react-icons/bs";

const Header = () => {
    return (

        <section id="header">
            <div className="container header">
                <div className="header-left">
                    <h1>
                        <span>DIGITAL COMMUNICATION PLATFORM</span>
                        <span>MAKE YOUR LIFE EASIER</span>
                    </h1>
                    <p className="u-text-small u-text-light">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                    <div className="nav-link">
                        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
                        <Button text={"How It Works"} btnClass={" hello btn-orange"} href={"#faq"} />
                    </div>
                </div>

                <div className="header-right">
                    <img src={communication} alt="home" />
                </div>
            </div>
            <div className="floating-icon">
                <a href="#features"></a>
                    <BsMouse color="fff" size={25} className="mouse" />
            </div>

        </section>
    );
};

export default Header;