import { React } from 'react';

function FilterCheckbox({ onClickCheckbox, isShort, handleChek }) {
 
    return (
        <>
            <label className="filter-checkbox">
                <div className='filter-checkbox__container'>
                    <input className="filter-checkbox__input"
                        onClick={onClickCheckbox}
                        onChange={handleChek}
                        checked={isShort}
                        type="checkbox" />
                    <span className="filter-checkbox__slider"></span>
                </div>
            </label>
        </>
    )
}
export default FilterCheckbox;