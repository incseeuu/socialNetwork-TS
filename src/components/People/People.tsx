import React from 'react';
import UserContainer from "./User/UserContainer";
import classes from './People.module.css'

const People = () => {
    return (
        <div className={classes.container}>
            <UserContainer/>
        </div>
    );
};

export default People;