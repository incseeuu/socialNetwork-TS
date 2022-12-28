import React from 'react';
import classes from "./MyPosts.module.css";
import NewPosts from "./NewPost/NewPosts";
import {PostsStateType} from "../../../state/state";


type MyPostsType = {
    stateForMyPosts: PostsStateType[]
    addPostCallBack: (newPostText: string) => void
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
            <NewPosts addPostCallBack={props.addPostCallBack}/>
        </div>
    );
};

export default MyPosts;