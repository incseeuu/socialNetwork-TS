import {ActionsType, MessagesPageType, MessagesStateType} from "./state";
import {v1} from "uuid";

export type AddMessageACType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextACType = ReturnType<typeof updateMessageTextActionCreator>

const messagesPageReducer = (state: MessagesPageType, action: ActionsType) => {
    switch (action.type){
        case "ADD-MESSAGE":
            let newMessage: MessagesStateType = {id: v1(), content: state.newMessage}
            state.stateMessages.push(newMessage)
            state.newMessage = ''
            break
        case "UPDATE-TEXT-MESSAGES":
            state.newMessage = action.value
    }
    return state
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'} as const
}

export const updateMessageTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-TEXT-MESSAGES',
        value: text
    } as const
}

export default messagesPageReducer;