import React from 'react'
import CustomBtn from '../modalBtn/modalBtn'
import Skills from '../skills/skills'
import Schoolxp from '../schoolxp/schoolxp'
import './homeBody.css'

const HomeBody = () => {
    return (
        <section className="homeBody">
            <div className="bodyBlock">
                <h5 className="profileTitle">Experiences Pro</h5>
                <div className="blockContent">
                    <CustomBtn date="09/2019 - 09/2020 (1 an)" company="Veepee" job="Developpeur FullStack" />
                    <CustomBtn date="08/2018 - 02/2019 (6 mois)" company="Captive" job="Developpeur Ruby on Rails" />
                    <CustomBtn date="09/2016 - 02/2017 (6 mois)" company="Cora" job="Employé Libre Service" />
                    <CustomBtn date="09/2015 - 06/2016 (10 mois)" company="Printemps" job="Conseiller de vente" />
                </div>
            </div>
            <div className="bodyBlock">
                <Schoolxp />
            </div>
            <div className="bodyBlock">
                <Skills />
            </div>
            <div className="bodyBlock">
                <h5 className="profileTitle">À propos de moi</h5>
                <div className="blockContent">
                    <p className="apropos">
                        Après 3 ans et demi de formation, dont 1 an et demi en entreprise,
                        je suis en recherche de missions pour pratiquer les technos que j'affectionne particulièrement : Ruby, Rails et React.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomeBody;