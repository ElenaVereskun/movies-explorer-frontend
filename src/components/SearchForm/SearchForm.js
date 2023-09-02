import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import smalltumb_active from '../../images/smalltumb_active.svg';

function SearchForm() {
    return (
        <>
            <form className='search-form'>
                <div className='search-form__quest'>
                    <input className='search-form__input' placeholder="Фильм" />
                    <button className='search-form__button'>Поиск</button>
                </div>
                <div className='search-form__short'>
                    <FilterCheckbox tumb={smalltumb_active} />
                    <p className='search-form__short-text'>Короткометражки</p>
                </div>

            </form>
        </>

    )
}
export default SearchForm;