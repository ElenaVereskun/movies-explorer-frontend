import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';
import arrow from '../../images/about-me-arrow.svg';
import photo from '../../images/photo.svg'

function AboutMe() {
    return (
        <section className='about-me'>
            <AboutProjectTitle titleText={'Студент'} />
            <div className='about-me__student'>
                <div className='about-me__info'>
                    <h2 className='about-me__title'>Елена</h2>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 36 лет</p>
                    <p className='about-me__text'>Я живу в Москве. У меня есть муж, трое детей,
                    собака и попугай. Я люблю путешествовать, как заграницу, так и по России.
                    Идеально в компании детей и друзей. Мы любим посещать музеи, выставки, театры, экскурсии.
                    С подругами ходим на квесты, различные игры, музыкальные и не только. 
                    Пробовала себя в разных профессиях, занималась дизайном интерьеров.
                    После прохождения курса Практикума хотела бы найти работу в web-разработке. </p>
                    <p className='about-me__link'>Github</p>
                </div>
                <img className='about-me__photo' src={photo} alt='фото' />
            </div>
            <h2 className='about-me__elements'>Портфолио</h2>
            <div className='about-me__element'>
                <p className='about-me__item'>Статичный сайт</p>
                <img className='about-me__arrow' src={arrow} alt='стрелка' />
            </div>
            <div className='about-me__element'>
                <p className='about-me__item'>Адаптивный сайт</p>
                <img className='about-me__arrow' src={arrow} alt='стрелка' />
            </div>
            <div className='about-me__element'>
                <p className='about-me__item'>Одностраничное приложение</p>
                <img className='about-me__arrow' src={arrow} alt='стрелка' />
            </div>
        </section>
    )
}
export default AboutMe;