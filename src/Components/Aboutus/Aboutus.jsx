import React from 'react';
import './Aboutus.css';
import shravan_image from "../Assets/shravan_image.png";
import jerom_image from "../Assets/jerom_image.png";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Get to know the passionate individuals behind our project.</p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
    
          <div className="team-member">
            <img src={shravan_image} alt="Shravan" />
            <h3>Shravan</h3>
            <p>
              Shravan is a creative visionary who excels in bringing innovative ideas to life.
            </p>
          </div>
          {/* Jerom Shanon */}
          <div className="team-member">
            <img src={jerom_image} alt="Jerom Shanon" />
            <h3>Jerom Shanon</h3>
            <p>
              Jerom Shanon is a tech-savvy problem solver ensuring smooth project execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
