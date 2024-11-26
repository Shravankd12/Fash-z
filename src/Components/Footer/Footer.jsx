import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Fash-Z</p>
      </div>
      <ul className="footer-links">
      <li><Link style={{ textDecoration: "none" }} to="/Aboutus" > About us</Link></li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <a 
            href="https://www.instagram.com/shravankd12" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
        <a 
            href="https://wa.me/7046439523" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div> 
      </div>
      <div className="footer-quote">
        <hr />
        <p>"Where Style Meets Comfort – Redefining Fashion for You"</p>
      </div>
    </div>
  );
};

export default Footer;
