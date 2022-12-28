import React, {MouseEvent} from 'react';
import classes from "./UsersMessages.module.css";
import {MessageItem} from "./MessagesItem/MessageItem";
import {MessagesStateType} from "../../../state/state";


type UsersMessagesType = {
    stateForUsersMessages: MessagesStateType[]
}

const UsersMessages = (props: UsersMessagesType) => {

    const messagesSendRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = (e: MouseEvent<HTMLButtonElement>) => {
        alert(messagesSendRef.current?.value)
    }

    const mappingStateDialogsMessages = props.stateForUsersMessages.map(el => <MessageItem id={el.id} content={el.content}/>)

    return (
            <div className={classes.messagesList}>
                Messages
                {mappingStateDialogsMessages}
                <div>
                    <textarea ref={messagesSendRef}></textarea>
                    <button onClick={onClickSendHandler}>Send</button>
                </div>
            </div>
    );
};

export default UsersMessages;