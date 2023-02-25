import React from 'react';
import classes from "./Messages.module.css"
import UsersDialog from "./UsersDialog/UsersDialog";
import {ActionsType, DialogStateType, MessagesStateType} from "../../state/store";
import UsersMessagesContainer from "./UsersMessages/UsersMessagesContainer";


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
            <UsersMessagesContainer />
        </div>
    );
};

export default Messages;