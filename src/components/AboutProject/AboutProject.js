import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';

function AboutProject() {
    return (
        <section className='about-project'>
            <AboutProjectTitle titleText={'О проекте'} />
            <ul class="about-project__tab">
                <li class="about-project__item">
                    <h3 class="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p class="about-project__description">Составление плана, работу над бэкендом, вёрстку, 
                    добавление функциональности и финальные доработки.</p>
                </li>
                <li class="about-project__item">
                    <h3 class="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p class="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, 
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul class="about-project__tab-timing">
                <li class="about-project__item">
                    <h3 class="about-project__title-timing" style={{backgroundColor: '#3DDC84'}}>1 неделя</h3>
                    <p class="about-project__description-timing">Back-end</p>
                </li>
                <li class="about-project__item">
                    <h3 class="about-project__title-timing" style={{backgroundColor: '#303030', color:'white'}}>4 недели</h3>
                    <p class="about-project__description-timing">Front-end</p>
                </li>
            </ul>
        </section>
    )
}
export default AboutProject;