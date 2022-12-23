import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.headerLogo}/>
            <span className={classes.headerName}>Social Network</span>
        </header>
    );
};

export default Header;