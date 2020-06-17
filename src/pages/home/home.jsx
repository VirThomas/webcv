import React, { useState } from 'react';
import './home.css'
import Button from 'react-bootstrap/Button'
import CustomBtn from '../../components/modalBtn/modalBtn'
import profilePic from './photoprofil.png'


const Home = () => {
    return (
        <>
            <section className="header">
                <div className="profile">
                    <div className="bigPanel">
                        <h2>
                            Thomas ABDOUL AZID
                    </h2>
                        <h1>
                            Développeur ReactJs
                    </h1>
                    </div>
                    <div class="image-cropper">
                        <img src={profilePic} alt="avatar" className="profile-pic" />
                    </div>
                </div>
                <div className="myInfos">
                    <span className="infoLabel">Email : </span> <span className="persoInfos">thomas.abdoulazid@gmail.com</span>
                    <span className="infoLabel">Tel : </span> <span className="persoInfos">0782149953</span>
                    <span className="infoLabel">LinkedIn : </span> <span className="persoInfos">linkedin.com/in/thomasabd</span>
                    <span className="infoLabel">Github : </span> <span className="persoInfos"><a href="github.com/VirThomas">Linkedin </a></span>
                </div>
            </section>
            <section className="body">
                <div className="bodyBlock">
                    <h5 className="profileTitle">Experiences Pro</h5>
                    <div className="blockContent">
                        <CustomBtn date="09/2019 - 09/2020" company="Veepee" job="Developpeur FullStack" />
                        <CustomBtn date="08/2018 - 02/2019" company="Captive" job="Developpeur Ruby on Rails" />
                        <CustomBtn date="09/2016 - 02/2017" company="Cora" job="Employé Libre Service" />
                        <CustomBtn date="09/2015 - 06/2016" company="Printemps" job="Conseiller de vente" />
                    </div>
                </div>
                <div className="bodyBlock">
                    <h5 className="profileTitle">Parcours</h5>
                    <div className="blockContent">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
                <div className="bodyBlock">
                    <h5 className="profileTitle">Projets</h5>
                    <div className="blockContent">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
                <div className="bodyBlock">
                    <h5 className="profileTitle">Me contacter</h5>
                    <div className="blockContent">
                        <Button className="contactBtn">Contact me </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;