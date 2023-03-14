import React from 'react';

import UsersMessages from "./UsersMessages";
import {
    addMessageActionCreator,
    MessagesPageType
} from "../../../state/messagesPage-reducer";

import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    stateForUsersMessages: MessagesPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    sendMessage: (value: string) => void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        stateForUsersMessages: state.messagePage,
        isAuth: state.auth.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (value: string) => dispatch(addMessageActionCreator(value)),
    }
}

const UsersMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(UsersMessages)

export default UsersMessagesContainer;