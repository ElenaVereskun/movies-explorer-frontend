import { React, useState } from 'react';
import logo from '../../images/logo.svg';
import { useNavigate, Link } from "react-router-dom";
import * as mainApi from '../../utils/MainApi';

function Register({ onRegister }) {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, password } = formValue;

        mainApi.register({ name, email, password })
            .then((data) => {
                localStorage.setItem(data.name, data.email, data.password);                
                onRegister(true);
            })
            .then(() => navigate("/signin"))
            .catch((err) => console.log(`Ошибка регистрации: ${err}`));
    }

    const navigate = useNavigate();

    function handleEnter() {
        navigate("/signin");
    }
    return (
        <section className='register'>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__container">
                    <div className='register__header'>
                        <Link to="/" className='register__logo'>
                            <img src={logo} alt='логотип' />
                        </Link>
                        <h2 className="register__title">Добро пожаловать!</h2>
                    </div>
                    <div className="register__input-container">
                        <p className="register__title-name">Имя</p>
                        <input className="register__name" value={formValue.name}
                            onChange={handleChange}
                            type="text" name="name" placeholder="Имя" noValidate />
                    </div>
                    <div className="register__input-container">
                        <p className="register__title-email">E-mail</p>
                        <input className="register__email" value={formValue.email}
                            onChange={handleChange}
                            type="email" name="email" placeholder="Email" noValidate />
                    </div>
                    <div className="register__input-container" style={{ marginBottom: '10px' }}>
                        <p className="register__title-password">Пароль</p>
                        <input className="register__password" value={formValue.password}
                            onChange={handleChange}
                            type="password" rel="to-replace"
                            name="password" placeholder="password" noValidate />
                    </div>
                    <span className='register__mistake'></span>
                    <button className="register__button-register" 
                    onClick={onRegister}>Зарегистрироваться</button>
                </div>
                <div className='register__enter'>
                    <p className='register__enter-text'>Уже зарегистрированы?</p>
                    <button className="register__button-enter" onClick={handleEnter}>Войти</button>
                </div>
            </form>
        </section>
    )
}
export default Register;