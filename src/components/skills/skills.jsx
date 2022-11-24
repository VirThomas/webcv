import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Skills = () => {
    return (
        <>
            <h5 className="profileTitle">Compétences techniques</h5>
            <div className="skills">
                <Badge className="skill" variant="primary">Ruby</Badge>
                <Badge className="skill" variant="primary">Ruby on Rails</Badge>
                <Badge className="skill" variant="primary">NodeJs</Badge>
                <Badge className="skill" variant="primary">ReactJs</Badge>
                <Badge className="skill" variant="primary">Electron</Badge>
                <Badge className="skill" variant="primary">HTML/CSS</Badge>
                <Badge className="skill" variant="primary">C</Badge>
                <Badge className="skill" variant="primary">C#</Badge>
                <Badge className="skill" variant="primary">Go</Badge>
                <Badge className="skill" variant="primary">Python</Badge>
                <Badge className="skill" variant="primary">Selenium</Badge>
                <Badge className="skill" variant="primary">Puppeteer</Badge>
                <Badge className="skill" variant="primary">PostgreSQL</Badge>
                <Badge className="skill" variant="primary">Redis</Badge>
                <Badge className="skill" variant="primary">Github/Gitlab</Badge>
            </div>
        </>
    )
}

export default Skills;