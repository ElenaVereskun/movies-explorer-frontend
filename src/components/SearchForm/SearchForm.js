import { React, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({ onSearch }) {
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    
    const handleChange = (e) => {
        const value = e.target.value
        localStorage.setItem("searchValue", value);
        setSearchValue(e.target.value);
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
                    <FilterCheckbox />
                    <p className='search-form__short-text'>Короткометражки</p>
                </div>
            </form>
        </section>
    )
}
export default SearchForm;