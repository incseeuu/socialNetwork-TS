import React from 'react';
import classes from "./UsersMessages.module.css";
import {MessageItem} from "./MessagesItem/MessageItem";
import {MessagesStateType} from "../../../state/state";


type UsersMessagesType = {
    stateForUsersMessages: MessagesStateType[]
}

const UsersMessages = (props: UsersMessagesType) => {


    const mappingStateDialogsMessages = props.stateForUsersMessages.map(el => <MessageItem id={el.id} content={el.content}/>)

    return (
            <div className={classes.messagesList}>
                Messages
                {mappingStateDialogsMessages}
            </div>
    );
};

export default UsersMessages;