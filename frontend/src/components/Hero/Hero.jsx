import React from "react";
import "./Hero.scss";
import heroBg from "../../assets/heroBg.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroBg} alt="" className="heroBg" />

      <div className="texts">
        <p>CASUAL, OFFICIAL & EVERYDAY</p>
        <p>
          Effortlessly blend comfort <br /> & style!
        </p>
        <p>
          Effortlessly blend comfort and style with our Casual, Official &
          Everyday collection, featuring cozy blazers, versatile denim,
          laid-back tees, and relaxed-fit shirts for your everyday adventures
        </p>
        <Link
          activeClass="active"
          to="popular"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1000}
        >
          <button>View Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
