import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isFetching: boolean
    logoutThunkCreator: () => void
}

const Header: React.FC<PropsType> = ({isFetching, login, logoutThunkCreator}) => {

    const onClickHandler = () => {
        logoutThunkCreator()
    }

    return (
        <header className={classes.header}>
            <div>
                <div>
                    {isFetching && login !== null
                        ? <div className={classes.authBlock}>
                            <span style={{color: 'white', marginLeft: '10px'}}>{'Welcome ' + login}</span>
                            <span className={classes.logout} onClick={onClickHandler}>Logout</span>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>

            </div>
            <img className={classes.headerLogo}/>
            <span className={classes.headerName}>Social Network</span>
        </header>
    );
};

export default Header;