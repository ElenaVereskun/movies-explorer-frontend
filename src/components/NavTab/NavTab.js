import { React, useEffect } from 'react';

function NavTab() {

    const handleScroll = (e) => {
        e.preventDefault();
        let footer = document.getElementById('footer');
        footer && footer.scrollIntoView({ behavior: "smooth"});
    };
    return (
        <div className='navtab'>
            <button className='navtab__container' onClick={handleScroll}>
                <p className='navtab__text'>Узнать больше</p>
            </button>
        </div>
    )
}
export default NavTab;