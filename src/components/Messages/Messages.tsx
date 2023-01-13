import React from 'react';
import classes from "./Messages.module.css"
import UsersMessages from "./UsersMessages/UsersMessages";
import UsersDialog from "./UsersDialog/UsersDialog";
import {ActionsType, DialogStateType, MessagesStateType} from "../../state/state";

type MessagesType = {
    stateForMessages: MessagesStateType[]
    stateForDialogs: DialogStateType[]
    newMessage: string
    dispatch: (action: ActionsType) => void
}

const Messages = (props: MessagesType) => {
    return (
        <div className={classes.mainMessages} >
            <UsersDialog stateForUsersDialog={props.stateForDialogs}/>
            <UsersMessages
                stateForUsersMessages={props.stateForMessages}
                newMessage={props.newMessage}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Messages;