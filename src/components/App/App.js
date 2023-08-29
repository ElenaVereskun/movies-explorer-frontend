import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
    return (
        <>
            <Main />
            <Routes>
                <Route path='/' />
                <Route path='/movies' />
                <Route path='/saved-movies' />
                <Route path='/profile' />
                <Route path='/signin' />
                <Route path='/signup' />
            </Routes>
        </>

    );
}
export default App;