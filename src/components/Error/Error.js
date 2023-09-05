import { React } from 'react';
function Error() {
    return (
        <div className='error'>
            <h2 className='error__title'>404</h2>
            <p className='error__text'>Страница не найдена</p>
            <button className='error__back'>Назад</button>
        </div>
    )
}
export default Error;