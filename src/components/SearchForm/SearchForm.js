import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <>
            <form className='search-form'>
                <div className='search-form__quest'>
                    <input className='search-form__input' placeholder="Фильм" />
                    <button className='search-form__button'>Поиск</button>
                </div>
                <div className='search-form__short'>
                    <FilterCheckbox />
                    <p className='search-form__short-text'>Короткометражки</p>
                </div>
            </form>
        </>

    )
}
export default SearchForm;