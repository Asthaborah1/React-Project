import React, { useState } from 'react'
import "./Navbar.css"
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button"
import "../UI/button/Button.css"
import logo from "../../assets/lockup.png"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        // NAVBAR SECTION
        <div className="Navbar">
            <nav className="container navbar">
                <div className="logo-text" >
                    <img src={logo} alt="lockup" />
                </div>
                <div>
                    <ul className="nav-side" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">Subscribe</a>
                        </li>
                        {/* <li className = "nav-btn">
                        <a href="#" className="btn btn-dark">Get Started</a>
                    </li> */}
                        <li className="nav-link nav-btn">
                            <Button text={"About"} btnClass={"btn-dark"} href={"#faq"} />
                        </li>

                    </ul>

                </div>
                <div className="menu-icons" onClick={toggleMenu}>
                    {showMenu ? (
                        <RiCloseLine color="#fff" size={30} />
                    ) : (
                        <AiOutlineBars color="#fff" size={27} />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;