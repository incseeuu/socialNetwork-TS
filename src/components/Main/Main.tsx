import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return (
        <div className={classes.main}>
            <div>
                <img className={classes.headerImg}
                     src="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg"/>
            </div>
            <div className={classes.avatarAndDescription}>
                <img className={classes.avatarImg}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuppnaEu0RmaG8sMGkJwE0VYzGVkcn2jJJhio2lf1uyckLEqGdWTSiLkqxcLo6fHqY_PU&usqp=CAU"/>
                <span className={classes.description}>Description</span>
            </div>
            <MyPosts/>

        </div>
    );
};

export default Main;