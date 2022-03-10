import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/b_r_o228";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dvkdtzcft/image/upload/v1644412709/avatars/cxcdtskn8toci6k8pkbz.jpg"
              alt="Founder"
            />
            <Typography>Bekzod Mirzaaliyev</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @Bekzod Mirzaaliyev.
            </span>
          </div>
          <div className="aboutSectionContainer2" >
            <Typography component="h2">Our Brands</Typography>
                <a href="https://t.me/b_r_o015 " target="blank" >
                  <TelegramIcon className="telegramSvgIcon" />
                </a>
                <a href="https://instagram.com/b_r_o228" target="blank">
                  <InstagramIcon className="instagramSvgIcon" />
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
