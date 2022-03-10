import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Bekzod Mirzaaliyev</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/b_r_o228">Instagram</a>
        <a href="https://t.me/b_r_o015">Youtube</a>
        <a href="https://www.linkedin.com/in/%D0%B1%D0%B5%D0%BA%D0%B7%D0%BE%D0%B4-%D0%BC%D0%B8%D1%80%D0%B7%D0%B0%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2-5b9a2b229/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
