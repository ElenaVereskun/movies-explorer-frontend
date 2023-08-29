import React from 'react';
/* import promo-logo from '../images/promo-logo.svg';
 */
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
            <section className='promo'>
                <h1 className='promo__title'>Учебный проект студента
                    факультета Веб&nbsp;-&nbsp;разработки.</h1>
                <p className='promo__subtitle'>Листайте ниже,
                    чтобы узнать больше про этот проект и его создателя.</p>
                {/* <img src='promo-logo'/> */}
                <NavTab />
            </section>
    )
}
export default Promo;