import React from 'react';
import promoLogo from '../../images/promo-logo.svg';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <img src={promoLogo} className='promo__logo' alt='промоЛого' />
                <div>
                    <h1 className='promo__title'>Учебный проект студента
                        факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже,
                        чтобы узнать больше про этот проект и его создателя.</p>
                </div>
            </div>
            <NavTab />
        </section>
    )
}
export default Promo;