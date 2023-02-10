import React from 'react';

import UsersMessages from "./UsersMessages";
import {
    addMessageActionCreator,
    MessagesPageType,
    updateMessageTextActionCreator
} from "../../../state/messagesPage-reducer";

import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    stateForUsersMessages: MessagesPageType
}

type mapDispatchToPropsType = {
    updateNewMessageCallBack: (value: string) => void,
    sendMessage: () => void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        stateForUsersMessages: state.messagePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageCallBack: (value: string) => dispatch(updateMessageTextActionCreator(value)),
        sendMessage: () => dispatch(addMessageActionCreator()),
    }
}

const UsersMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(UsersMessages)

export default UsersMessagesContainer;