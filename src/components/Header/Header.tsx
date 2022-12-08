import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.headerLogo}
                 // src={'https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg'}
            />
            <span className={classes.headerName}>Social Network</span>
        </header>
    );
};

export default Header;