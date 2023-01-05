import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";
import {PostsStateType} from "../../state/state";


type MainProps = {
    stateForMainPosts: PostsStateType[]
    addPostCallBack: () => void
    stateForNewPost: string
    updateNewPostsCallBack: (value: string) => void
}

const Main = (props: MainProps) => {
    return (
        <div className={classes.main}>
            <div className={classes.headerImg}>
            </div>
            <Profile/>
            <MyPosts
                stateForMyPosts={props.stateForMainPosts}
                addPostCallBack={props.addPostCallBack}
                stateForNewPost={props.stateForNewPost}
                updateNewPostsCallBack={props.updateNewPostsCallBack}
            />

        </div>
    );
};

export default Main;