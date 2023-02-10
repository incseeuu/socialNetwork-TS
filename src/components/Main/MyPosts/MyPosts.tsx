import React from 'react';
import classes from "./MyPosts.module.css";
import NewPostsContainer from "./NewPost/NewPostsContainer";


const MyPosts = () => {


    return (
        <div className={classes.myPosts}>
            <h3>My Posts</h3>
            <div className={classes.listPost}>
            </div>
            <div className={classes.newPosts}>New Posts</div>
            <NewPostsContainer/>
        </div>
    );
};

export default MyPosts;