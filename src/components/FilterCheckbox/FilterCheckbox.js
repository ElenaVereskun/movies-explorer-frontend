import React from 'react';

function FilterCheckbox() {
    return (
        <>
            <label class="filter-checkbox">
                <input class="filter-checkbox__input" type="checkbox"/>
                    <span class="filter-checkbox__slider"></span>
            </label>
        </>
    )
}
export default FilterCheckbox;