import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>GEN-Z'S Fashion</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Trending</p>
          </div>
          <p>Collections</p>
          <p>For GEN-Z</p>
        </div>
        <div className="hero-latest-btn">
          <div>Welcome</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
