import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__container'>
                <AboutProjectTitle titleText={'О проекте'} />
                <ul class="tab">
                    <li class="tab__items">
                        <h3 class="tab__title">Дипломный проект включал 5 этапов</h3>
                        <p class="tab__description">Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.</p>
                    </li>
                    <li class="tab__items">
                        <h3 class="tab__title">На выполнение диплома ушло 5 недель</h3>
                        <p class="tab__description">У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <ul class="tab-timing">
                    <li class="tab-timing__items">
                        <h3 class="tab-timing__title-timing" style={{ backgroundColor: '#3DDC84' }}>1 неделя</h3>
                        <p class="tab-timing__description-timing">Back-end</p>
                    </li>
                    <li class="tab-timing__items">
                        <h3 class="tab-timing__title-timing" style={{ backgroundColor: '#303030', color: 'white' }}>4 недели</h3>
                        <p class="tab-timing__description-timing">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default AboutProject;