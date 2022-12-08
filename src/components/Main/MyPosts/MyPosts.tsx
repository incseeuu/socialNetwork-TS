import React from 'react';
import classes from "./MyPosts.module.css";
import NewPosts from "./NewPost/NewPosts";

const MyPosts = () => {
    return (
            <div className={classes.myPosts}>My Posts
                <div className={classes.newPosts}>New Posts</div>
                <div className={classes.listPost}>
                    <NewPosts message={"Hello, how are you"} likeCount={15}/>
                    <NewPosts message={"Hello, I am fine"} likeCount={20}/>
                </div>
            </div>
    );
};

export default MyPosts;