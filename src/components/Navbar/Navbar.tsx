import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menuItems}>
                <div className={classes.menuProfile}>
                    <a>Profile</a>
                </div>
                <div className={classes.itemMessages}>
                    <a>Messages</a>
                </div>
                <div className={classes.itemNews}>
                    <a>News</a>
                </div>
                <div className={classes.itemMusic}>
                    <a>Music</a>
                </div>
                <div className={classes.itemSettings}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;