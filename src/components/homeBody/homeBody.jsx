import React from 'react'
import Skills from '../skills/skills'
import Schoolxp from '../schoolxp/schoolxp'
import Proxp from '../proxp/proxp'
import Aboutme from '../aboutme/aboutme'
import './homeBody.css'

const HomeBody = () => {
    return (
        <section className="homeBody">
            <div className="bodyBlock">
                <Aboutme />
            </div>
            <div className="bodyBlock">
                <Proxp />
            </div>
            <div className="bodyBlock">
                <Schoolxp />
            </div>
            <div className="bodyBlock">
                <Skills />
            </div>
        </section>
    )
}

export default HomeBody;