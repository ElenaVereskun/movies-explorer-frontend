import { React, useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error404 from '../Error/Error';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoutes';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        isLoggedIn &&
            mainApi.getUserProfileInfo({ token })
                .then((user) => {
                    setCurrentUser({ name: user.name, email: user.email });
                })
                .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
    }, [isLoggedIn]);

    useEffect(() => {
        tokenCheck();
    }, []);

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.getToken(jwt)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        navigate("/movies", { replace: true });
                    }
                })
                .catch((err) => console.log(`Ошибка получения токена: ${err}`));
        }
    }

    function handleUpdateUser({ name, email }) {
        mainApi.editUserInfo({ name, email })
            .then((data) => {
                setCurrentUser({ name: data.name, email: data.email });
                navigate('/profile', { replace: true });
            })
            .catch((err) => console.log(`Ошибка изменения данных пользователя: ${err}`));
    };



    return (
        <>
            <CurrentUserContext.Provider value={currentUser} className="content" >
                <Routes>
                    <Route path="/" element={<Main
                        isLoggedIn={isLoggedIn} />} />
                    <Route path="/movies" element={<ProtectedRoute element={<Movies
                        isLoggedIn={isLoggedIn}
                    />} isLoggedIn={isLoggedIn} />} />

                    <Route path='/saved-movies' element={<ProtectedRoute element={<SavedMovies
                    />} isLoggedIn={isLoggedIn} />} />

                    <Route path='/profile' element={<ProtectedRoute element={<Profile
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        onEditProfile={handleUpdateUser}
                    />} isLoggedIn={isLoggedIn} />} />

                    <Route path='/signin' element={<Login
                        onLogin={setIsLoggedIn} />} />
                    <Route path='/signup' element={<Register
                        onRegister={setIsLoggedIn}
                    />} />
                    <Route path='/error404' element={<Error404 />} />
                </Routes>
            </CurrentUserContext.Provider>
        </>

    );
}
export default App;