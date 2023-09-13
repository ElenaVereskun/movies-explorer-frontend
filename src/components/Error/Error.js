import { React } from 'react';
import {  useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <section className='error'>
            <h2 className='error__title'>404</h2>
            <p className='error__text'>Страница не найдена</p>
            <button className='error__back' onClick={goBack}>Назад</button>
        </section>
    )
}
export default Error;