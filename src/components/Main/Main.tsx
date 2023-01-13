import React from 'react';
import classes from './Main.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";
import {ActionsType, PostsStateType} from "../../state/state";


type MainProps = {
    stateForMainPosts: PostsStateType[]
    stateForNewPost: string
    dispatch: (action: ActionsType) => void
}

const Main = (props: MainProps) => {
    return (
        <div className={classes.main}>
            <div className={classes.headerImg}>
            </div>
            <Profile/>
            <MyPosts
                stateForMyPosts={props.stateForMainPosts}
                stateForNewPost={props.stateForNewPost}
                dispatch={props.dispatch}
            />

        </div>
    );
};

export default Main;