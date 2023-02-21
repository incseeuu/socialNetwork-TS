import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isFetching: boolean
}

const Header: React.FC<PropsType> = ({isFetching, login}) => {
    return (
        <header className={classes.header}>
            <div>
                {!isFetching
                    ? <span style={{color: 'white', marginLeft: '10px'}}>{'Welcome ' + login}</span>
                    : <NavLink to={''}>Login</NavLink>
                }
            </div>
            <img className={classes.headerLogo}/>
            <span className={classes.headerName}>Social Network</span>
        </header>
    );
};

export default Header;