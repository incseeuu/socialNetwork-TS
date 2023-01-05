import React, {MouseEvent} from 'react';
import classes from "./UsersMessages.module.css";
import {MessagesStateType} from "../../../state/state";
import FriendMessageItem from "./MessagesItem/FriendMessageItem/FriendMessageItem";
import { SelfMessageItem } from './MessagesItem/SelfMessageItem/SelfMessageItem';


type UsersMessagesType = {
    stateForUsersMessages: MessagesStateType[]
    newMessage: string
    addNewMessage: () => void
    updateNewMessageCallBack: (value: string) => void
}

const UsersMessages = (props: UsersMessagesType) => {

    const messagesSendRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = () => {
        props.addNewMessage()
    }

    const updateNewMessageCallBack = () => {
        if(messagesSendRef.current){
            props.updateNewMessageCallBack(messagesSendRef.current.value)
        }
    }

    const mappingStateDialogsMessages =
        props.stateForUsersMessages.map(el => {
            return (
                <div className={classes.messageContainer}>
                    <SelfMessageItem id={el.id} content={el.content}/>
                </div>
            )
        })

    return (
        <div className={classes.messagesList}>
            <div className={classes.chatContainer}>
                <FriendMessageItem />
                {mappingStateDialogsMessages}
                <FriendMessageItem />
            </div>

            <div className={classes.sendForm}>
                <textarea
                    value={props.newMessage}
                    onChange={updateNewMessageCallBack}
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