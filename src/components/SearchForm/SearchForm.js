import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch }) {
    const [searchValue, setSearchValue] = useState();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/movies') {
            setSearchValue(localStorage.getItem('searchValue'));
        }
        if (location.pathname === '/saved-movies') {
            setSearchValue('')
        }
    }, [localStorage.getItem('searchValue')]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (location.pathname === '/movies') {
            localStorage.setItem("searchValue", value);
            setSearchValue(value);
        }
        if (location.pathname === '/saved-movies') {
            localStorage.setItem("searchSavedValue", value);
            setSearchValue(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSearch();
    }
    return (
        <section>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-form__quest'>
                    <input className='search-form__input'
                        value={searchValue}
                        name="search"
                        onChange={handleChange}
                        placeholder="Фильм" />
                    <span ></span>
                    <button className='search-form__button'>Поиск</button>
                </div>
                <div className='search-form__short'>
                    <FilterCheckbox onClickCheckbox={onSearch} />
                    <p className='search-form__short-text'>Короткометражки</p>
                </div>
            </form>
        </section>
    )
}
export default SearchForm;