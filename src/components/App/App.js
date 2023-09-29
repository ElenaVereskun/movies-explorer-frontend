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
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSaved, setIsSaved] = useState(true);
  const navigate = useNavigate();
  /* 
      useEffect(() => {
      const token = localStorage.getItem('jwt')
          isLoggedIn &&
              Promise.all([mainApi.getUserProfileInfo(token), mainApi.getMovies(token)])
                  .then(([user, allSavedMovies]) => {
                      setCurrentUser(user);
                      localStorage.setItem("allSavedMovies", JSON.stringify(allSavedMovies));
                      setSavedMovies(allSavedMovies);
                      console.log(allSavedMovies);
                      setIsSaved(true);
                  })
                  .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
      }, [isLoggedIn]);
  
      useEffect(() => {
          tokenCheck();
      }, []); */



  useEffect(() => {
    const token = localStorage.getItem('jwt')
    isLoggedIn &&
      mainApi.getUserProfileInfo(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
  }, [isLoggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);


  useEffect(() => {
    isLoggedIn &&
      getSavedMovies();
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
  const allSavedMovies = JSON.parse(localStorage.getItem("allSavedMovies"));

  function handleSavedClick(movie) {
    console.log(movie);
    const isClicked = allSavedMovies.some((item) => item.movieId === movie.id);
    if (!isClicked) {
      saveMovie(movie);      
    } else {
      deleteMovie(movie);      
    }
  };

  function saveMovie(movie) {
    mainApi.savedMovie(movie)
      .then((newSavedMovie) => {
        setSavedMovies([...savedMovies, newSavedMovie]);
      })
      .catch((err) => console.log(`${err}`))
  };

  /*   function deleteMovie(movie) {
      mainApi.deleteMovie(movie._id)
        .then(() => {
          const savedNewMovies = savedMovies.filter((c) => c._id !== movie._id);
          setSavedMovies(savedNewMovies);
        })
        .catch((err) => console.log(`${err}`))
    }; */

  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => {
          state.filter((c) => c._id !== movie._id);
        })
      })
      .catch((err) => console.log(`${err}`))
  };

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
            handleSavedClick={handleSavedClick}
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