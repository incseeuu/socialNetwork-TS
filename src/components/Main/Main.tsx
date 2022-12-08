import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.headerImg}>
            </div>
            <div className={classes.avatarAndDescription}>
                <div className={classes.avatarImg}></div>
                <div className={classes.description}>Description</div>
            </div>
            <MyPosts/>

        </div>
    );
};

export default Main;