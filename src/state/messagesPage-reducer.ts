import {v1} from "uuid";

export type MessagesPageType = {
    stateDialogs: DialogStateType[]
    stateMessages: MessagesStateType[]
}

export type DialogStateType = {
    id: string
    name: string
}

export type MessagesStateType = {
    id: string
    content: string
}

export type MessagesPageACType = AddMessageACType

export type AddMessageACType = ReturnType<typeof addMessageActionCreator>

let initialState: MessagesPageType = {
    stateDialogs: [
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Maksim'},
        {id: v1(), name: 'Stepan'},
        {id: v1(), name: 'Yosip'},
    ],
    stateMessages: [
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
        {id: v1(), content: 'Hello, i\'m kitty a little bit'},
    ]
}

const messagesPageReducer = (state= initialState, action: MessagesPageACType): MessagesPageType => {
    switch (action.type){
        case "ADD-MESSAGE":
            let newMessage: MessagesStateType = {id: v1(), content: action.value}
            return {...state, stateMessages: [...state.stateMessages, newMessage]}

    }
    return state
}

export const addMessageActionCreator = (value: string) => {
    return {type: 'ADD-MESSAGE', value} as const
}


export default messagesPageReducer;