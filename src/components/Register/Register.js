import { React } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    function handleEnter() {
        navigate("/signin");
    }
    return (
        <div className='register'>
            <Header />
            <form className="register__form">
                <div className="register__container">
                    <h2 className="register__title">Добро пожаловать!</h2>
                    <div className="register__input-container">
                        <p className="register__title-name">Имя</p>
                        <input className="register__name"
                            type="text" placeholder="Имя" required />
                    </div>
                    <div className="register__input-container">
                        <p className="register__title-email">E-mail</p>
                        <input className="register__email"
                            type="text" name="email" placeholder="Email" required />
                    </div>
                    <div className="register__input-container" style={{ marginBottom: '10px' }}>
                        <p className="register__title-password">Пароль</p>
                        <input className="register__password"
                            type="password" rel="to-replace" name="password" placeholder="password" required />

                    </div>
                    <p className='register__mistake'>Ошибка</p>
                    <button className="register__button-register">Зарегистрироваться</button>

                </div>
                <div className='register__enter'>
                    <p className='register__enter-text'>Уже зарегистрированы?</p>
                    <button className="register__button-enter" onClick={handleEnter}>Войти</button>
                </div>
            </form>
        </div>
    )
}
export default Register;