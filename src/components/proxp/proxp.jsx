import React from 'react'
import CustomBtn from '../modalBtn/modalBtn'

const Proxp = () => {
    return (
        <>
            <h5 className="profileTitle">Expériences Pro</h5>
            <div className="blockContent">
                <CustomBtn date="09/2023 - Now (10 mois)" company="Freelance" job="Développeur Ruby on Rails" />
                <CustomBtn date="11/2020 - 06/2023 (2 ans 8 mois)" company="Plezi" job="Développeur Ruby on Rails" />
                <CustomBtn date="09/2019 - 09/2020 (1 an)" company="Veepee" job="Développeur FullStack" />
                <CustomBtn date="08/2018 - 02/2019 (6 mois)" company="Captive" job="Développeur Ruby on Rails" />
                <CustomBtn date="09/2016 - 02/2017 (6 mois)" company="Cora" job="Employé Libre Service" />
                <CustomBtn date="09/2015 - 06/2016 (10 mois)" company="Printemps" job="Conseiller de vente" />
            </div>
        </>
    )
}

export default Proxp;
