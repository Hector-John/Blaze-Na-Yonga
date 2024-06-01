import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Blaze na Yonga</p>
      </div>
      <ul className="links">
        <li>Company</li>
        <li>Products</li>
        <li>Shops</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="socials">
        <div className="icon" style={{ cursor: "pointer" }}>
          <FaInstagram size={35} color="maroon" />
        </div>
        <div className="icon" style={{ cursor: "pointer" }}>
          <FaFacebook size={35} color="#1877F2" />
        </div>
        <div className="icon" style={{ cursor: "pointer" }}>
          <FaPinterest size={35} color="#BD081C" />
        </div>
        <div className="icon" style={{ cursor: "pointer" }}>
          <FaTiktok size={35} color="#80799D" />
        </div>
        <div className="icon" style={{ cursor: "pointer" }}>
          <FaWhatsapp size={35} color="#25D366" />
        </div>
      </div>

      <div className="copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
