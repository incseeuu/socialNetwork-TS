import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";

export type PostsPropsType = {
    message: string
    likeCount: number
}

const stateForAllPosts: PostsPropsType[] = [
    {message: "Hello, how are you", likeCount: 15},
    {message: "Hello, I am fine", likeCount: 20},
]

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.headerImg}>
            </div>
            <Profile/>
            <MyPosts state={stateForAllPosts}/>

        </div>
    );
};

export default Main;