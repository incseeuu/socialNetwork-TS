import React from 'react';
import classes from "./UsersMessages.module.css";
import {MessageItem} from "./MessagesItem/MessageItem";
import {MessagesType} from "../Messages";

type UsersMessagesType = {
    state: MessagesType[]
}

const UsersMessages = (props: UsersMessagesType) => {


    const mappingStateDialogsMessages = props.state.map(el => <MessageItem content={el.content}/>)

    return (
            <div className={classes.messagesList}>
                Messages
                {mappingStateDialogsMessages}
            </div>
    );
};

export default UsersMessages;