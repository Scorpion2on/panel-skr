import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://ptakmedical.com/wp-content/uploads/2020/05/group-17.png'></img>
        <div className={s.menu}>
            {/* <div className='menu-item-1'>
            Oferta
        </div>
        <div className='menu-item-2'>
            Wycena
        </div>
        <div className='menu-item-3'>
            Kontakt
        </div> */}
        </div>
    </header>
}

export default Header;
