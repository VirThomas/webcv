import React from 'react'
import CustomBtn from '../modalBtn/modalBtn'

const Schoolxp = () => {
    return (
        <>
            <h5 className="profileTitle">Parcours Scolaire</h5>
            <div className="blockContent">
                <CustomBtn date="2017-2020" company="École 42" />
                <CustomBtn date="2015-2016" company="IFA Metz" />
                <CustomBtn date="2014-2015" company="IPF Paris" />
                <CustomBtn date="2013-2014" company="Lycée" job="Jean Lurçat" />
            </div>
        </>
    )
}

export default Schoolxp;