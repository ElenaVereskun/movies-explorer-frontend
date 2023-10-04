import { React, useState, useEffect } from 'react';

function FilterCheckbox({ onClickCheckbox, isSaved }) {
/*     const [isShort, setIsShort] = useState(localStorage.getItem('isShort') || 'false') ;

    function chek(evt) {
        const value = evt.target.checked;
        setIsShort(value);
        localStorage.setItem("isShort", value);
    } */

    const [isShort, setIsShort] = useState(localStorage.getItem('isShort') || 'false') ;

    useEffect(() => {
        if (isSaved) {
            setIsShort('')
        } else {
            setIsShort(localStorage.getItem('isShort'));
        }
    }, [localStorage.getItem('isShort')]);

    function chek(evt) {
        const value = evt.target.checked;
        setIsShort(value);
        localStorage.setItem("isShort", value);
    };
    return (
        <>
            <label class="filter-checkbox">
                <input class="filter-checkbox__input"
                    onClick={onClickCheckbox}
                    onChange={chek}
                    value={isShort}
                    type="checkbox" />
                <span class="filter-checkbox__slider"></span>
            </label>
        </>
    )
}
export default FilterCheckbox;