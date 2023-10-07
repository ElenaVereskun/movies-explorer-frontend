import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({ onClickCheckbox}) {
    const [isShort, setIsShort] = useState(localStorage.getItem('isShort') || 'false');
    const location = useLocation();

    function chek(evt) {
        const value = evt.target.checked;
        setIsShort(value);
        localStorage.setItem("isShort", value);
    };

    useEffect(() => {
        if (location.pathname === '/saved-movies') {
            setIsShort('')
        }
        if (location.pathname === '/movies') {
            setIsShort(localStorage.getItem('isShort') || 'false');
        }
    }, [localStorage.getItem('isShort')]);

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