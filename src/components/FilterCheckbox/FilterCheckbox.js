import React from 'react';

function FilterCheckbox({ tumb }) {
    return (
        <>
            <button className='filter-checkbox' style={{ backgroundImage: { tumb } }} />
        </>
    )
}
export default FilterCheckbox;