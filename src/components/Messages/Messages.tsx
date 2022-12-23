import React from 'react';
import classes from "./Messages.module.css"
import UsersMessages from "./UsersMessages/UsersMessages";
import UsersDialog from "./UsersDialog/UsersDialog";

export type MessagesType = {
    content: string
}
export type DialogPropsType = {
    id: number
    name: string
}

const stateMessages: MessagesType[] = [
    {content: 'Hello, i\'m kitty a little bit'},
    {content: 'Hello, i\'m kitty a little bit'},
    {content: 'Hello, i\'m kitty a little bit'},
    {content: 'Hello, i\'m kitty a little bit'},
    {content: 'Hello, i\'m kitty a little bit'},
    {content: 'Hello, i\'m kitty a little bit'},
]

const stateDialogs: DialogPropsType[] = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Vladimir'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Maksim'},
    {id: 5, name: 'Stepan'},
    {id: 6, name: 'Yosip'},
]

const Messages = (props: MessagesType) => {
    return (
        <div className={classes.mainMessages} >
            <UsersDialog state={stateDialogs}/>
            <UsersMessages state={stateMessages}/>
        </div>
    );
};

export default Messages;