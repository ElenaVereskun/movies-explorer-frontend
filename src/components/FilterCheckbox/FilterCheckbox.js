import { React, useState } from 'react';

function FilterCheckbox() {
    const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
    
    function chek(evt) {
        const value = evt.target.checked;
        setIsShort(value);
        localStorage.setItem("isShort", value);
    }
    return (
        <>
            <label class="filter-checkbox">
                <input class="filter-checkbox__input" onChange={chek} value={isShort} type="checkbox" />
                <span class="filter-checkbox__slider"></span>
            </label>
        </>
    )
}
export default FilterCheckbox;