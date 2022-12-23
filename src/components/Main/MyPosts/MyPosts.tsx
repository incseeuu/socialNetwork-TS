import React from 'react';
import classes from "./MyPosts.module.css";
import NewPosts from "./NewPost/NewPosts";
import {PostsPropsType} from "../Main";

type MyPostsType = {
    state: PostsPropsType[]
}

const MyPosts = (props: MyPostsType) => {

    const mappingStateAllPosts = props.state.map(el => {
        return (
            <div>
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
            <NewPosts/>
        </div>
    );
};

export default MyPosts;