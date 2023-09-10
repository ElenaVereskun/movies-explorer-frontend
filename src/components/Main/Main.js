import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <div className='main'>
            <div className='main__container'>
                <Header />
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Footer />
            </div>
        </div>

    )
}
export default Main;
