import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Register />} />
            </Routes>
        </>

    );
}
export default App;