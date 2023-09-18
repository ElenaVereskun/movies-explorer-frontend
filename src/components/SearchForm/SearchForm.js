import { React, useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
/*     const [search, setSearch] = useState();

    function handleChangeSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearch();
    }, []); */

/*     function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик

    }
    function handleAddPlaceSubmit({ name, link }) {
        api.createCard({ name, link })
          .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
          })
          .catch((err) => console.log(`Ошибка добавления новой карточки: ${err}`));
      } */
    return (
        <section>
            <form className='search-form'>
                <div className='search-form__quest'>
                    <input className='search-form__input' 
                     value='dddddd' 
                    /*onChange={handleChangeSearch} */
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