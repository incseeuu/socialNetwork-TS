import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menuItems}>
                <div className={`${classes.itemProfile} ${classes.menuItem}`}>
                    <NavLink to="/main" activeClassName={classes.activeUrl}>Profile</NavLink>
                </div>
                <div className={`${classes.itemMessages} ${classes.menuItem}`}>
                    <NavLink to="/messages" activeClassName={classes.activeUrl}>Messages</NavLink>
                </div>
                <div className={`${classes.itemNews} ${classes.menuItem}`}>
                    <NavLink to="/news" activeClassName={classes.activeUrl}>News</NavLink>
                </div>
                <div className={`${classes.itemMusic} ${classes.menuItem}`}>
                    <NavLink to="/music" activeClassName={classes.activeUrl}>Music</NavLink>
                </div>
                <div className={`${classes.itemSettings} ${classes.menuItem}`}>
                    <NavLink to="/settings" activeClassName={classes.activeUrl}>Settings</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;