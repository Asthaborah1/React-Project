import React from 'react'
import "./Features.css"
import { FcAssistant } from "react-icons/fc";
import Button from "../UI/button/Button"
import "../UI/button/Button.css"
import Service1 from "../../assets/service1.png"
import Service2 from "../../assets/service2.png"
import Service3 from "../../assets/service3.png"
import Feature from './Feature';
import { featurelist } from "./data.js"


const Features = () => {
  return (
    <section className="feature1" id="features">
      <div className="container features">
        <div className="u-title">
          <FcAssistant color="#fff" size={30} />
          <h2>What We do?</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <div className = "img1"><img src={Service1} alt="icon1" /></div>
            <div className = "img2"><img src={Service2} alt="icon2" /></div>
            <div className = "img3"><img src={Service3} alt="icon3" /></div>
          </div>
          <div className="features-right">
            {
              featurelist.map((feature) => (
                <Feature key={feature.key} icon={feature.icon} heading={feature.heading} text={feature.text} />
              ))
            }
          </div>
        </div>
        <div className="nav-link services1">
          <Button text={"Services"} btnClass={"btn-orange"} href={"#"} />
        </div>
      </div>
    </section>
  );
};

export default Features;