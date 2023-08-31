import React from 'react';

function Footer() {
    return (
        <section className="footer">
            <p className='footer__about'>Учебный проект Яндекс.
            Практикум х BeatFilm.</p>
            <div className='footer__elements'>
                <p className='footer__year'>&copy; 2023</p>
                <div className='footer__items'>
                    <p className='footer__item'>Яндекс.Практикум</p>
                    <p className='footer__item'>Github</p>
                </div>
            </div>
        </section>
    )
}
export default Footer;