import { React, useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSaved, setIsSaved] = useState(true);
  const [isLike, setIsLike] = useState();
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    isLoggedIn &&
      mainApi.getUserProfileInfo(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
  }, [isLoggedIn]);

  function getSavedMovies() {
    const token = localStorage.getItem('jwt');
    mainApi.getMovies(token)
      .then((allSavedMovies) => {
        localStorage.setItem("allSavedMovies", JSON.stringify(allSavedMovies));
        setSavedMovies(allSavedMovies);
        setIsSaved(true);
      })
      .catch((err) => console.log(`${err}`))
  };


  useEffect(() => {
    isLoggedIn &&
      getSavedMovies();
  }, []);

  function getMovies() {
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((err) => setServerError('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    isLoggedIn &&
      getMovies();
  }, []);

  function handleSavedClick(movie) {
    const isClicked = savedMovies.some((item) => item.movieId === movie.id);
    if (!isClicked) {
      saveMovie(movie);
      handleLike(movie);
    } else {
      const movieOnDelete = savedMovies.filter((item) => item.movieId === movie.id)[0];
      deleteMovie(movieOnDelete);
      handleLike(movie);
    }
  };

  function saveMovie(movie) {
    mainApi.savedMovie(movie)
      .then((newSavedMovie) => {
        setSavedMovies([...savedMovies, newSavedMovie]);

        /*         const isLiked = !!savedMovies && !!savedMovies.find((m) => m.movieId !== newSavedMovie.movieId);
                console.log(!!savedMovies.find((m) => m.movieId === newSavedMovie.movieId));
                console.log(!!savedMovies.find((m) => m.movieId === movie.movieId));
                console.log(isLiked);
                
                setIsLike(isLiked);   */

        /*  setIsLike(true); */
      })
      .catch((err) => console.log(`${err}`))
  };

  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newDeleteMovie = savedMovies.filter((c) => c._id !== movie._id);
        setSavedMovies(newDeleteMovie);
        /* 
                const isDisLike = !!savedMovies && !!savedMovies.find((m) => m.movieId === newDeleteMovie.movieId);
                console.log(isDisLike);
        
                setIsLike(isDisLike); */

        /*        setIsLike(false);//тоже самое ,что и выше */
      })
      .catch((err) => console.log(`${err}`))
  };

  function handleLike(movie) {
    const isLiked = !!savedMovies && !!savedMovies.find((m) => m.movieId === movie.id);//муви из сохр проверяем на id переданной
    setIsLike(isLiked);
  };


  function handleUpdateUser({ name, email }) {
    mainApi.editUserInfo({ name, email })
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        navigate('/profile', { replace: true });
      })
      .catch((err) => console.log(`Ошибка изменения данных пользователя: ${err}`));
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    mainApi.getToken(jwt)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => console.log(`Ошибка получения токена: ${err}`));
  }
  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);
  /* isLiked={!!props.savedMovies && !!props.savedMovies.find((m) => m.movieId === movie.movieId)} */

  return (
    <>
      <CurrentUserContext.Provider value={currentUser} className="content" >
        <Routes>
          <Route path="/" element={<Main
            isLoggedIn={isLoggedIn} />} />
          <Route path="/movies" element={<ProtectedRoute element={<Movies
            isLoggedIn={isLoggedIn}
            handleSavedClick={handleSavedClick}
            isLike={isLike}
            isLoading={isLoading}
            serverError={serverError}
          />} isLoggedIn={isLoggedIn} />} />

          <Route path='/saved-movies' element={<ProtectedRoute element={<SavedMovies
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            isLoggedIn={isLoggedIn}
            isSaved={isSaved} />} isLoggedIn={isLoggedIn} />} />

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
          <Route path='*' element={<Error404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>

  );
}
export default App;