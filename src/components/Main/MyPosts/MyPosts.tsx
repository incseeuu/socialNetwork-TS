import React from 'react';
import classes from "./MyPosts.module.css";
import NewPosts from "./NewPost/NewPosts";
import {ActionsType, PostsStateType} from "../../../state/state";


type MyPostsType = {
    stateForMyPosts: PostsStateType[]
    stateForNewPost: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {

    const mappingStateAllPosts = props.stateForMyPosts.map(el => {
        return (
            <div key={el.id}>
                <span>{el.message}</span>
                <span className={classes.like}>{el.likeCount}</span>
            </div>
        )
    })

    return (
        <div className={classes.myPosts}>
            <h3>My Posts</h3>
            <div className={classes.listPost}>
                {mappingStateAllPosts}
            </div>
            <div className={classes.newPosts}>New Posts</div>
            <NewPosts
                stateForNewPost={props.stateForNewPost}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default MyPosts;