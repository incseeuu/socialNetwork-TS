import React from 'react';
import classes from './FriendMessageItem.module.css'

const FriendMessageItem = () => {
    return (
        <div className={classes.mainContainer}>
            <span>Hello, i'm kitty a little bit</span>
            <div>22:02</div>
        </div>
    );
};

export default FriendMessageItem;