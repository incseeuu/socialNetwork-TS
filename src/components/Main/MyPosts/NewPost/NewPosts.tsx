import React from 'react';
import classes from "./NewPosts.module.css";

type newPostsProps = {
    message: string
    likeCount: number
}

const NewPosts = (props: newPostsProps) => {
    return (
        <div>
            <div className={classes.postItem}>{props.message}</div>
            <div>
                <span className={classes.like}>{props.likeCount}</span>
            </div>
        </div>
    );
};

export default NewPosts;