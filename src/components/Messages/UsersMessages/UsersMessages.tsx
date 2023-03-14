import React, {MouseEvent} from 'react';
import classes from "./UsersMessages.module.css";
import {MessagesStateType} from "../../../state/store";
import FriendMessageItem from "./MessagesItem/FriendMessageItem/FriendMessageItem";
import {SelfMessageItem} from './MessagesItem/SelfMessageItem/SelfMessageItem';
import {MessagesPageType} from "../../../state/messagesPage-reducer";
import {Redirect} from "react-router-dom";
import {FormSendMessage, TextFormRedux} from "../../common/TextForm/TextForm";


type UsersMessagesType = {
    stateForUsersMessages: MessagesPageType
    sendMessage: (value: string) => void
    isAuth: boolean
}

const UsersMessages = (props: UsersMessagesType) => {

    const onSubmit = (formData: FormSendMessage) => {
        props.sendMessage(formData.message)
    }

    const mappingStateDialogsMessages =
        props.stateForUsersMessages.stateMessages.map(el => {
            return (
                <div className={classes.messageContainer}>
                    <SelfMessageItem id={el.id} content={el.content}/>
                </div>
            )
        })

    return (!props.isAuth ? <Redirect to={'/login'}/>
            : <div className={classes.messagesList}>
                <div className={classes.chatContainer}>
                    <FriendMessageItem/>
                    {mappingStateDialogsMessages}
                    <FriendMessageItem/>
                </div>

                <TextFormRedux onSubmit={onSubmit}/>
            </div>
    );
};

export default UsersMessages;