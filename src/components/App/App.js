import { React, useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error404 from '../Error/Error';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoutes';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt'));
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSaved, setIsSaved] = useState(true);
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const navigate = useNavigate();
  const location = useLocation();

  const getInfo = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserProfileInfo(jwt)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
      mainApi.getSavedMovies(jwt)
        .then((allSavedMovies) => {
          setSavedMovies(allSavedMovies);
          setIsSaved(true);
        })
        .catch((err) => console.log(`Ошибка получения сохраненных фильмов: ${err}`))
    }
  };

  useEffect(() => {
    getInfo();
  }, [isLoggedIn]);

  useEffect(() => {
    setIsLoading(true);
    isLoggedIn &&
      moviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((err) => setServerError('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
        .finally(setIsLoading(false));
  }, [isLoggedIn]);

  function handleSavedClick(movie) {
    const isClicked = savedMovies.some((item) => item.movieId === movie.id);
    if (!isClicked) {
      saveMovie(movie);
    } else {
      const movieOnDelete = savedMovies.filter((item) => item.movieId === movie.id)[0];
      deleteMovie(movieOnDelete);
    }
  };

  function saveMovie(movie) {
    mainApi.savedMovie(movie)
      .then((newSavedMovie) => {
        setSavedMovies([newSavedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(`${err}`));
  };

  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newDeleteMovie = savedMovies.filter((c) => c._id !== movie._id);
        setSavedMovies(newDeleteMovie);
      })
      .catch((err) => console.log(`${err}`))
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (jwt) {
      mainApi.getToken()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(path);
          }
        })
        .catch((err) => console.log(`Ошибка получения токена: ${err}`));
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleUpdateUser({ name, email }) {
    mainApi.editUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        infoTooltipSuccess();
      })
      .catch(() => infoTooltipFail());
  };

  const [errorText, setErrorText] = useState(' ');
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImg, setInfoTooltipImg] = useState();

  function infoTooltipSuccess() {
    setErrorText('Данные профиля обновлены успешно');
    setInfoTooltipOpen(true);
    setInfoTooltipImg(success);
  }

  function infoTooltipFail() {
    setErrorText('Что-то пошло не так! Попробуйте ещё раз.');
    setInfoTooltipOpen(true);
    setInfoTooltipImg(fail);
  }
  function handleCloseButton() {
    setInfoTooltipOpen(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser} className="content" >
        <InfoTooltip infoTooltipOpen={infoTooltipOpen}
          text={errorText}
          onClickCloseButton={handleCloseButton}
          infotooltipimg={infoTooltipImg} />
        <Routes>
          <Route path="/" element={<Main
            isLoggedIn={isLoggedIn} />} />
          <Route path="/movies" element={<ProtectedRoute element={<Movies
            isLoggedIn={isLoggedIn}
            handleSavedClick={handleSavedClick}
            isLoading={isLoading}
            serverError={serverError}
            isSaved={isSaved}
            savedMovies={savedMovies}
          />}
            isLoggedIn={isLoggedIn} />} />

          <Route path='/saved-movies' element={<ProtectedRoute element={<SavedMovies
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            isLoggedIn={isLoggedIn}
            isSaved={isSaved} />}
            isLoggedIn={isLoggedIn} />} />

          <Route path='/profile' element={<ProtectedRoute element={<Profile
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            onEditProfile={handleUpdateUser}
          />}
            isLoggedIn={isLoggedIn} />} />

          <Route path="/signup" element={!isLoggedIn
            ? <Register setIsLoggedIn={setIsLoggedIn} />
            : <Navigate to={'/movies'} replace />} />

          <Route path="/signin" element={!isLoggedIn
            ? <Login setIsLoggedIn={setIsLoggedIn} />
            : <Navigate to={'/movies'} replace />} />

          <Route path='*' element={<Error404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>

  );
}
export default App;