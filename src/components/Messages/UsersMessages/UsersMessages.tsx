import React, {MouseEvent} from 'react';
import classes from "./UsersMessages.module.css";
import {MessagesStateType} from "../../../state/store";
import FriendMessageItem from "./MessagesItem/FriendMessageItem/FriendMessageItem";
import {SelfMessageItem} from './MessagesItem/SelfMessageItem/SelfMessageItem';
import {MessagesPageType} from "../../../state/messagesPage-reducer";


type UsersMessagesType = {
    stateForUsersMessages: MessagesPageType
    updateNewMessageCallBack: (value: string) => void
    sendMessage: () => void
}

const UsersMessages = (props: UsersMessagesType) => {

    const messagesSendRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = () => {
        props.sendMessage()
    }

    const onChangeUpdateNewMessage = () => {
        if (messagesSendRef.current) {
            props.updateNewMessageCallBack(messagesSendRef.current.value)
        }
    }

    const mappingStateDialogsMessages =
        props.stateForUsersMessages.stateMessages.map(el => {
            return (
                <div className={classes.messageContainer}>
                    <SelfMessageItem id={el.id} content={el.content}/>
                </div>
            )
        })

    return (
        <div className={classes.messagesList}>
            <div className={classes.chatContainer}>
                <FriendMessageItem/>
                {mappingStateDialogsMessages}
                <FriendMessageItem/>
            </div>

            <div className={classes.sendForm}>
                <textarea
                    value={props.stateForUsersMessages.newMessage}
                    onChange={onChangeUpdateNewMessage}
                    className={classes.textarea}
                    placeholder={'Write message...'}
                    ref={messagesSendRef}
                />
                <button className={classes.sendBtn} onClick={onClickSendHandler}>Send</button>
            </div>
        </div>
    );
};

export default UsersMessages;