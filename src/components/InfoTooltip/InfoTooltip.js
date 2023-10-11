import React from 'react';

function InfoTooltip({ infoTooltipOpen, text, onClickCloseButton, infotooltipimg }) {
    return (
        <div className={infoTooltipOpen ? 'infotooltip' : 'infotooltip__block'}>
            <div className='infotooltip__container'>
                <img src={infotooltipimg} className='infotooltip__img' alt='img' />
                <p className={text === 'Данные профиля обновлены успешно' ? 'infotooltip__caption-black' : 'infotooltip__caption-red'} >{text}</p>
                <button className='infotooltip__button-close' onClick={onClickCloseButton}></button>
            </div>
        </div>
    )
}
export default InfoTooltip;