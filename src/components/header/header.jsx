import React from "react";
import profilePic from "./photoprofil.jpeg";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="profile">
        <div className="bigPanel">
          <h3>Thomas A.</h3>
          <h1>Développeur Ruby/Rails - Node/React</h1>
        </div>
        <div class="image-cropper">
          <img src={profilePic} alt="avatar" className="profile-pic" />
        </div>
      </div>
      <div className="myInfos">
        <span className="infoLabel">Email : </span>{" "}
        <span className="persoInfos">
          <a href="mailto:thomas.abdoulazid@gmail.com">
            thomas.abdoulazid@gmail.com
          </a>
        </span>
        <span className="infoLabel">Tel : </span>{" "}
        <span className="persoInfos">
          <a href="tel:0782149953">07.82.14.99.53</a>
        </span>
        <span className="infoLabel">Adresse : </span>{" "}
        <span className="persoInfos">
          <a href="https://www.google.com/maps/place/32b+Bd+Haussmann,+75009+Paris/@48.8729407,2.3322085,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e3760fa3ed1:0xd7a0d9dd7d4beb0!8m2!3d48.8729407!4d2.3343972">
            32B Boulevard Haussmann <br />
            75009 Paris{" "}
          </a>
        </span>
      </div>
    </section>
  );
};

export default Header;
