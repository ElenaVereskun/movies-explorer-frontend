import React from 'react';
import promoLogo from '../../images/promo-logo.svg';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <img src={promoLogo} className='promo__logo' alt='промоЛого' />
                <div className='promo__text'>
                    <h1 className='promo__title'>Учебный проект студента
                        факультета Веб&#8209;разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже,
                        чтобы узнать больше про этот проект и его создателя.</p>
                </div>
            </div>
            <NavTab />
        </section>
    )
}
export default Promo;