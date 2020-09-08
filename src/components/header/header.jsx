import React from "react";
import profilePic from "./photoprofil.png";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="profile">
        <div className="bigPanel">
          <h3>Thomas ABDOUL AZID</h3>
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
          <a href="https://www.google.com/maps/place/207+Jardin+de+l'Arche,+92000+Nanterre/@48.8944585,2.2284248,17z/data=!3m1!4b1!4m5!3m4!1s0x47e664feb366cecb:0xe68404678e40c5e0!8m2!3d48.894455!4d2.2306135">
            207 jardin de l'arche <br />
            92000 Nanterre{" "}
          </a>
        </span>
      </div>
    </section>
  );
};

export default Header;
