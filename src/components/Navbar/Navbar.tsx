import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menuItems}>
                <div className={`${classes.menuProfile} ${classes.menuItem}`}>
                    <a>Profile</a>
                </div>
                <div className={`${classes.itemMessages} ${classes.menuItem}`}>
                    <a>Messages</a>
                </div>
                <div className={`${classes.itemNews} ${classes.menuItem}`}>
                    <a>News</a>
                </div>
                <div className={`${classes.itemMusic} ${classes.menuItem}`}>
                    <a>Music</a>
                </div>
                <div className={`${classes.itemSettings} ${classes.menuItem}`}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;