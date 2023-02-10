import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileContainer from "./Profile/ProfileContainer";




const Main = () => {
    return (
        <div className={classes.main}>
            <ProfileContainer/>
            <MyPosts/>

        </div>
    );
};

export default Main;