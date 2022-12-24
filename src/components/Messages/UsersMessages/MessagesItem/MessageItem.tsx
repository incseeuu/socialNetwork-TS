import React from 'react';
import classes from "../../UsersMessages/UsersMessages.module.css"

type MessagesItemType = {
    id: number
    content: string
}

export const MessageItem = (props: MessagesItemType) => {
    return (
        <div>{props.content}</div>
    )
}