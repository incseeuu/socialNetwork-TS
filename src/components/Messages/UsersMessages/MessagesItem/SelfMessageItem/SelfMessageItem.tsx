import React from 'react';
import classes from './SelfMessageItem.module.css';

type MessagesItemType = {
    id: string
    content: string
}

export const SelfMessageItem = (props: MessagesItemType) => {
    return (
        <div className={classes.mainContainer}>
            <span>{props.content}</span>
            <div>22:00</div>
        </div>
    )
}