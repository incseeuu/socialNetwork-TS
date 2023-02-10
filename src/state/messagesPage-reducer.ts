import {v1} from "uuid";

export type MessagesPageType = {
    stateDialogs: DialogStateType[]
    stateMessages: MessagesStateType[]
    newMessage: string
}

export type DialogStateType = {
    id: string
    name: string
}

export type MessagesStateType = {
    id: string
    content: string
}

export type MessagesPageACType = AddMessageACType | UpdateMessageTextACType

export type AddMessageACType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextACType = ReturnType<typeof updateMessageTextActionCreator>

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
    ],
    newMessage: ''
}

const messagesPageReducer = (state= initialState, action: MessagesPageACType): MessagesPageType => {
    switch (action.type){
        case "ADD-MESSAGE":
            let newMessage: MessagesStateType = {id: v1(), content: state.newMessage}
            return {...state, stateMessages: [...state.stateMessages, newMessage], newMessage: ''}
        case "UPDATE-TEXT-MESSAGES":
            return {...state, newMessage: action.payload.text}

    }
    return state
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'} as const
}

export const updateMessageTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-TEXT-MESSAGES',
        payload: {
            text
        }
    } as const
}

export default messagesPageReducer;