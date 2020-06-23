import React from 'react';
import './home.css'
import Header from '../../components/header/header'
import HomeBody from '../../components/homeBody/homeBody'


const Home = () => {
    return (
        <>
            <Header />
            <HomeBody />
            <section className="footer">Powered with ReactJS by Thomas</section>
        </>
    )
}

export default Home;