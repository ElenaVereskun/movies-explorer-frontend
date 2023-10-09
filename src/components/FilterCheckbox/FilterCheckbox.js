import { React } from 'react';

function FilterCheckbox({ onClickCheckbox, isShort, handleChek}) {
        
    return (
        <>
            <label class="filter-checkbox">
                <input class="filter-checkbox__input"
                    onClick={onClickCheckbox}
                    onChange={handleChek}
                    value={isShort}
                    type="checkbox" />
                <span class="filter-checkbox__slider"></span>
            </label>
        </>
    )
}
export default FilterCheckbox;