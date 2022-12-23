import React from 'react';
import classes from "../../UsersMessages/UsersMessages.module.css"
import {MessagesType} from "../../Messages";

export const MessageItem = (props: MessagesType) => {
    return (
        <div>{props.content}</div>
    )
}